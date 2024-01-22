import questionList from "../data/questionList.json";
import _ from "lodash";
import QuestionList from "../components/QuestionList";

export interface pages {
    upperLimit: number;
    lowerLimit: number;
}

export default function() {

    const randomizedQuestion = _.shuffle(questionList).map(({question, answer}, index)=>({question, answer, number: index+1}));

    return <div className="bg-gray-300 p-5">
        <h1>Exam</h1>
        <QuestionList randomizedQuestion={randomizedQuestion} />
    </div>
}