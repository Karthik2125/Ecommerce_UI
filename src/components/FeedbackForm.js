import React, { useState } from "react";
import "../styles/FeedbackForm.css";

function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, feedback });
    setRating(5);
    setFeedback("");
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(+e.target.value)}>
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      <label>Feedback:</label>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows="3"
        placeholder="Write your feedback here..."
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
