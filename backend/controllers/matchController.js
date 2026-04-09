exports.matchCandidate = (req, res) => {
  const { candidate, jobs } = req.body;

  const results = jobs.map(job => {
    const matchedSkills = candidate.skills.filter(s =>
      job.skills.includes(s)
    );

    const skillScore =
      (matchedSkills.length / job.skills.length) * 100;

    const expScore =
      candidate.experience >= job.experienceRequired ? 100 : 50;

    const finalScore = skillScore * 0.7 + expScore * 0.3;

    return {
      job,
      skillScore,
      expScore,
      finalScore
    };
  });

  res.json(results);
};