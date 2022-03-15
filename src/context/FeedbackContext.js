import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is context for 1',
            rating: 10
        },
        {
            id: 2,
            text: 'this is context for 2',
            rating: 7
        },
        {
            id: 3,
            text: 'this is context for 3',
            rating: 3
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add the feedback

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    // delete the feedback

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to delete that comment')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    //update the feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item)=> item.id === id ? { ...item, ...updItem } : item)
        )}

// set item edit

const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
}

return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
}}>
    {children}
</FeedbackContext.Provider>
}
export default FeedbackContext