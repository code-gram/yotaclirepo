import React, { useReducer } from "react"
import ReviewQuestionContext from "./ReviewQuestionContext"

// Initial state
const initialState = {
    reviewQuestionJson: [],
    totalQuestionCount: 0,
    easyQuestionCount: 0,
    mediumQuestionCount: 0,
    hardQuestionCount: 0
};

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_REVIEW_QUESTION_JSON':
            const newValues = action.payload;
            return {
                ...state,
                reviewQuestionJson: newValues,
                totalQuestionCount: newValues.length,
                easyQuestionCount: newValues.filter(item => item.questionLevel === 'EASY' && !item.disabled).length,
                mediumQuestionCount: newValues.filter(item => item.questionLevel === 'MEDIUM' && !item.disabled).length,
                hardQuestionCount: newValues.filter(item => item.questionLevel === 'HARD' && !item.disabled).length
            };
        case 'UPDATE_REVIEW_QUESTION_JSON':
            const updateValues = action.payload;

            return {
                ...state,
                reviewQuestionJson: state.reviewQuestionJson.map(item => item.id == updateValues.id ? updateValues : item)
            };
        default:
            return state;
    }
};

export const ReviewQuestionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setReviewQuestionJsonValue = (newValue) => {
        dispatch({ type: 'SET_REVIEW_QUESTION_JSON', payload: newValue });
    };

    const updateReviewQuestionJsonValue = (newValue) => {
        dispatch({ type: 'UPDATE_REVIEW_QUESTION_JSON', payload: newValue });
    };

    return (
        <ReviewQuestionContext.Provider value={{ ...state, setReviewQuestionJsonValue, updateReviewQuestionJsonValue }}>
            {children}
        </ReviewQuestionContext.Provider>
    );
};