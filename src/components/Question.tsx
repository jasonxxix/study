import React from "react"
import { useState } from "react"

export interface QuestionType {
    number: number
    question: string
    answer: string
}

export default function({ number, question, answer }: QuestionType) {
    const [ isShowAnswer, setShowAnswer ] = useState(false);

    const toggleShowAnswer = () => {
        setShowAnswer(!isShowAnswer);
    }

    return <div className="mb-10">
        <pre>{number}. {question}</pre>
        <textarea className="block h-[150px] w-[600px]"/>
        <button onClick={toggleShowAnswer} className="bg-gray-200 p-1 border border-black rounded my-4">{isShowAnswer?"Hide":"Show"} Answer</button>
        <div className={`my-2 bg-black text-white ${isShowAnswer?"display":"hidden"}`}>
            <pre>{answer}</pre>
        </div>
    </div>
}