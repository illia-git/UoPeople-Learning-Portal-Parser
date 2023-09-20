const parseAssessmentForm = () => {
  const fieldsets = document.querySelectorAll(
    ".assessmentform fieldset.clearfix"
  );
  const results = [];

  const formatResult = (aspectNumber, overview, minGrade, maxGrade) => {
    return `=====================================\nAspect ${aspectNumber}\nOverview: ${overview}\nGrade for Aspect ${aspectNumber}: min ${minGrade}, max ${maxGrade}\nComment for Aspect ${aspectNumber}: "short comment"\n=====================================`;
  };

  fieldsets.forEach((fieldset) => {
    const aspectTitle = fieldset.querySelector("h3")?.textContent?.trim();
    const [_, aspectNumber] = aspectTitle
      ? aspectTitle.split(" ")
      : ["Aspect", "N/A"];
    const overview =
      fieldset.querySelector(".fitem.description p")?.textContent?.trim() ||
      "N/A";
    const gradeOptions = fieldset.querySelector("select");

    let minGrade = "N/A";
    let maxGrade = "N/A";

    if (gradeOptions) {
      const grades = Array.from(gradeOptions.options).map((opt) =>
        parseInt(opt.value)
      );
      minGrade = Math.max(0, Math.min(...grades));
      maxGrade = Math.max(...grades);
    }

    results.push(formatResult(aspectNumber, overview, minGrade, maxGrade));
  });

  return results.join("\n\n");
};

console.log(parseAssessmentForm());
