const checkPostSchema = (req, res, next) => {
    const { postedBy, text } = req.body;
  
    if (postedBy === null && text === null) {
      return res.status(400).json({ error : 'Erreur dans la création du post, donnée manquante' });
    }
  
    next();
  };
  
module.exports = checkPostSchema;