import * as React from "react";
import { useState, useCallback } from "react";
import "./popup.css";

interface FormData {
  focus: string;
  techStack: string[];
}

const Custom: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(() => ({
    focus: localStorage.getItem("focus") || "development",
    techStack: JSON.parse(localStorage.getItem("techStack") || "[]"),
  }));

  const [isCopied, setIsCopied] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState(
    localStorage.getItem("generatedPrompt") || ""
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setIsCopied(false);
    setFormData((prevData) => {
      if (name === "focus") {
        // Reset techStack when focus changes
        return {
          focus: value,
          techStack: [],
        };
      } else if (name === "techStack") {
        return {
          ...prevData,
          techStack: checked
            ? [...prevData.techStack, value]
            : prevData.techStack.filter((tech) => tech !== value),
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  }, []);

  const handleGenerate = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();  // Add this line to prevent default behavior
  
    console.log("Form Data Submitted:", formData);
  
    const cdata = formData.techStack.length > 0
      ? `Act as an expert ${formData.focus} programmer proficient in ${formData.techStack.join(", ")}. Your task is to provide detailed, accurate, and practical advice on ${formData.focus} programming challenges using these technologies. When responding, focus on ${formData.focus} best practices and provide specific examples and explanations for ${formData.techStack.join(", ")}. Offer step-by-step guidance when appropriate, utilizing the mentioned technologies. Your advice should include suggestions for optimizations and improvements within the context of ${formData.techStack.join(", ")}, as well as addressing potential pitfalls and how to avoid them when working with these technologies. 
  
      If the focus is on competitive programming, always include a clear analysis of the time and space complexity for any functions or algorithms you discuss. Explain these complexities in Big O notation and provide brief justifications for your analysis.
  
      Remember to tailor your responses to the specific needs of ${formData.focus} programming while leveraging your expertise in ${formData.techStack.join(", ")}. Your goal is to provide comprehensive, insightful, and actionable information that directly applies to the user's technical environment and programming objectives. Do not write anything right now. Just say understood if you understood the assignment.`
      : `Select at least 1 tech stack to generate the prompt`;
  
    setGeneratedPrompt(cdata);
    try {
      localStorage.setItem("generatedPrompt", cdata);
      localStorage.setItem("focus", formData.focus);
      localStorage.setItem("techStack", JSON.stringify(formData.techStack));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [formData]);

  const handleCopyPrompt = useCallback(() => {
    if (!generatedPrompt) return;

    navigator.clipboard.writeText(generatedPrompt)
      .then(() => {
        setIsCopied(true);
        console.log("Prompt copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy prompt:", err);
      });
  }, [generatedPrompt]);

  return (
    <div>
      <h3>AI Prompt Generator</h3>
      <fieldset>
        <legend>Choose Your Focus</legend>
        <label>
          <input
            type="radio"
            name="focus"
            value="development"
            checked={formData.focus === "development"}
            onChange={handleChange}
          />
          Development
        </label>
        <label>
          <input
            type="radio"
            name="focus"
            value="competitive_programming"
            checked={formData.focus === "competitive_programming"}
            onChange={handleChange}
          />
          CP / Leetcode
        </label>
      </fieldset>

      <fieldset>
        <legend>Choose Your Programming Languages and Tech Stack</legend>
        {(formData.focus === "development"
          ? [
              "javascript",
              "python",
              "java",
              "csharp",
              "c++",
              "html",
              "css",
              "react",
              "nodejs",
              "django",
              "flask",
              "spring",
            ]
          : ["python", "java", "c++"]
        ).map((tech) => (
          <label key={tech}>
            <input
              type="checkbox"
              name="techStack"
              value={tech}
              checked={formData.techStack.includes(tech)}
              onChange={handleChange}
            />
            {tech.charAt(0).toUpperCase() + tech.slice(1).replace("_", " & ")}
          </label>
        ))}
      </fieldset>

      <button className="generatebutton" onClick={handleGenerate}>Generate</button>

      <fieldset>
        <legend>Generated Prompt:</legend>
        <p>{generatedPrompt}</p>
        {generatedPrompt && formData.techStack.length > 0 && (
          <button
            className="clipboardbutton"
            type="button"
            onClick={handleCopyPrompt}
          >
            Copy Generated Prompt
          </button>
        )}
        {isCopied && (
          <div className="success-message">
            <p>Prompt is copied to clipboard</p>
          </div>
        )}
      </fieldset>

      <div className="linkto"> 
        <a href="#" onClick={() => chrome.runtime.openOptionsPage()}>
          ABOUT
        </a>
      </div>
    </div>
  );
};

export default Custom;