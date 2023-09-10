const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  // Solo cifra la contraseña si ha sido modificada o es nueva
  if (!this.isModified('password')) return next();

  try {
    // Genera un salt para el cifrado
    const salt = await bcrypt.genSalt(10);

    // Cifra la contraseña con el salt generado
    const hashedPassword = await bcrypt.hash(this.password, salt);

    // Asigna la contraseña cifrada al campo de contraseña
    this.password = hashedPassword;

    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model('User', userSchema);
