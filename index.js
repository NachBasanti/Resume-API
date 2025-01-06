document.getElementById("analyzeBtn").addEventListener("click", async function () {
    const fileInput = document.getElementById("resumeInput");
    const jobDescription = document.getElementById("jobDescription").value;
    const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
  
    if (!fileInput.files[0]) {
      resultsDiv.innerHTML = "<p>Please upload a resume file.</p>";
      return;
    }
    if (!jobDescription.trim()) {
      resultsDiv.innerHTML = "<p>Please enter a job description.</p>";
      return;
    }
  
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      // Call Affinda Resume Parsing API
      const response = await fetch("https://api.affinda.com/v1/resumes", {
        method: "POST",
        headers: {
          "Authorization": "Bearer aff_14f149c90d455b6852fdd2965daf7911462fdddc", 
        },
        body: formData,
      });
  
      if (!response.ok) throw new Error("Failed to analyze the resume.");
  
      const resumeData = await response.json();
      console.log(resumeData);
  
      // Extract relevant details (for example, skills)
      const resumeSkills = resumeData.data.skills ? resumeData.data.skills.map(skill => skill.name.toLowerCase()) : [];
      const jobDescriptionNormalized = jobDescription.toLowerCase();
  
      // Function to calculate fuzzy matches (simple approach)
      const fuzzyMatch = (keyword, skillsArray) => {
        return skillsArray.filter(skill => skill.includes(keyword)).length > 0;
      };
  
      // Normalize job description and resume skills
      const jobKeywords = jobDescriptionNormalized.split(/\s+/);
  
      // Calculate score based on keyword matching (with fuzzy matching)
      const matchedKeywords = jobKeywords.filter(keyword => fuzzyMatch(keyword, resumeSkills));
      const score = ((matchedKeywords.length / jobKeywords.length) * 100).toFixed(2);
  
      // Identify missing skills from the job description
      const missingSkills = jobKeywords.filter(keyword => !resumeSkills.includes(keyword));
      
      // Display results
      resultsDiv.innerHTML = `
        <h3>ANALYSIS RESULTS</h3>
        <p><strong>Score:</strong> ${score}%</p>
        <p><strong>Matched Keywords:</strong> ${matchedKeywords.join(", ") || "None"}</p>
        <p><strong>Suggestions:</strong> Add more relevant skills like ${missingSkills.join(", ") || "None"}.</p>
        <h4>Suggestions for Improvement:</h4>
        <ul>
          <li><strong>Focus on matching key experience:</strong> Make sure your experience aligns with the job's key responsibilities (e.g., cloud technologies, programming languages, etc.).</li>
          <br>
          <li><strong>Use specific terminology:</strong> For example, mention "cloud computing" or "microservices" if applicable to your experience.</li>
        </ul>
      `;
  
    } catch (error) {
      console.error("Error details:", error);
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
  