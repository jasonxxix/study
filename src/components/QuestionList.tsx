import Question from "./Question";
import { QuestionType } from "./Question";
import { pages } from "../pages/Exam";
import { useState } from "react";
import _ from "lodash";

const INCREMENT = 5;

interface QuestionList {
    randomizedQuestion: QuestionType[];
}


export default function({randomizedQuestion}: QuestionList) {
    const [ pages, setPages ] = useState<pages>({ upperLimit: INCREMENT, lowerLimit: 0});
    const increaseLimit = () => {
        const newPages: pages = {
            upperLimit: pages.upperLimit + INCREMENT,
            lowerLimit: pages.lowerLimit + INCREMENT
        }
        setPages(newPages);
    }

    const decreaseLimit = () => {
        const newPages: pages = {
            upperLimit: pages.upperLimit - INCREMENT,
            lowerLimit: pages.lowerLimit - INCREMENT
        }
        setPages(newPages);
    }
    
    const currentQuestions = _.slice(randomizedQuestion, pages.lowerLimit, pages.upperLimit);

    return <div>
        {currentQuestions.map(({question, answer, number})=><Question key={number} number={number} question={question} answer={answer} />)}
        <button onClick={decreaseLimit} className="p-1 m-1">&lt;</button>
        <button onClick={increaseLimit} className="p-1 m-1">&gt;</button>
    </div>
}