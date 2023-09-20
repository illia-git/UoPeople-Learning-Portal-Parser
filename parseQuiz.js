const extractQuestions = () => {
  try {
    return Array.from(document.querySelectorAll("div.que"))
      .map((questionElement) => {
        const { id } = questionElement;
        const questionNumber = id.split("-")[2];
        const questionText = questionElement
          .querySelector(".qtext")
          .textContent.trim();
        const options = Array.from(
          questionElement.querySelectorAll(".answer .flex-fill.ml-1")
        )
          .map(
            (opt, index) =>
              `${String.fromCharCode(97 + index)}. ${opt.textContent.trim()}`
          )
          .join("\n");

        return `Question ${questionNumber}: ${questionText}\n\n${options}`;
      })
      .join("\n\n");
  } catch {
    console.error("Error extracting questions");
    return "";
  }
};

console.log(extractQuestions());
