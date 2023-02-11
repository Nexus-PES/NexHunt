import React from 'react'


// async function FetchQuestions() {
//     const res = await fetch('http://localhost:3000/api/questions')
//     const questions = await res.json()
//     return questions
// }


export default async function Question1({ params }) {

    // const questions = await FetchQuestions()

    const question = params.question
	return (
		<>
			{question}
		</>
	);
}
