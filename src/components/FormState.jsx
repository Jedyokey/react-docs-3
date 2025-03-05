import React, { useState } from 'react'

const FormState = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === "success") {
        return <h2>That's right!</h2>;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err);
        }
    }

    const handleTextareaChange = (e) => {
        setAnswer(e.target.value);
    }
        
  return (
    <div className="form-state">
        <h2>City quiz</h2>
        <p>
            In which city is there a billboard that turns air into drinkable water?
        </p>

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="answer">Your answer:</label><br />
            <textarea 
                value={answer}
                onChange={handleTextareaChange}
                disabled={status === "submitting"} 
            /><br />
            <button disabled={answer.length === 0 || status === "submitting"}>Submit</button>
            {error !== null && <p>{error.message}</p>}
        </form>
      
    </div>
  )
}

export default FormState


const submitForm = (answer) => {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== "lima";
            if (shouldError) {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            } else {
                resolve();
            }
        }, 1500);
    })
}