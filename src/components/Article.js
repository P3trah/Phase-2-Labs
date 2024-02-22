import React from 'react';

function Article({ title, date = "January 1, 1970", preview }) {

  const minutesToRead = Math.ceil(preview.split(' ').length / 200); // Assuming 200 words per minute

  const coffeeCups = "☕️".repeat(Math.ceil(minutesToRead / 5));
  const bentoBoxes = "🍱".repeat(Math.ceil(minutesToRead / 10));

  const minutesReadDisplay = minutesToRead <= 30 ? `${coffeeCups} ${minutesToRead} min read` : `${bentoBoxes} ${minutesToRead} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{minutesReadDisplay}</p>
    </article>
  );
}

export default Article;
