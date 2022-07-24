const mongoose = require('mongoose')

const UserShema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["admin", "employe", "partenaire", "revendeur"],
      default: "user",
    },
    username: {
      type: String,
      required: [true, "Vous devez entrez votre nom d'uttilsateur"],
    },
    image: {
      type: String,
      required: [true, 'Vous devez charger un logo ou une photo de profil'],
    },
    email: {
      type: String,
      required: [true, 'Vous devez entrez un email valide'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Vous devez entrez un mot de passe'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserShema)
