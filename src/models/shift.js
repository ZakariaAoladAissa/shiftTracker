import { Schema, models, model } from "mongoose";

const ShiftSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  establishment: { type: String, required: true },
  date: { type: Date, required: true },
  hoursWorked: { type: Number, required: true },
  hourlyRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Prevent redefining the model
const Shift = models.Shift || model("Shift", ShiftSchema);

export default Shift;
