const HOSPITAL = "Hospital of Dalida";
const ADMIN = "Dalida";

let doctor = "Beknar";
let IsWork = true;
let patients = [
  "patient1",
  "patient2",
  "patient3",
  "patient4",
  "patient5",
  "patient6",
  "patient7",
];
let info = {
  hospitalName: HOSPITAL,
  adminName: ADMIN,
  doctors: [doctor],
  status: IsWork,
  patients: patients,
  patientCount: patients.length,
};

function printInfo() {
  console.log(
    " Hospital name: " + info.hospitalName,
    "\n",
    "Admin name: " + info.adminName,
    "\n",
    "Doctor: " + info.doctors,
    "\n",
    "Patient count: " + info.patientCount,
    "\n",
    "Patients:" + info.patients
  );
}

function randomChoise() {
  return Math.floor(Math.random() * 4);
}

function patientFate(patient) {
  let randomNumber = randomChoise();
  console.log("Patients:", patients);
  if (randomNumber === 0) {
    console.log(
      `You are lucky ${patients[patient]}, Dr.${doctor} was able to cure you!`
    );
    console.log(`${patients[patient]} is discharged.`);
    console.log();
    patients.splice(patients.indexOf(patient), 1);
  } else if (randomNumber === 1) {
    console.log(
      `Dr.${doctor} didn't try ne otdushi, for that reason ${patients[patient]} fell ill again.`
    );
    console.log();
  } else if (randomNumber === 2) {
    console.log("New patient admitted.");
    patients.push("patient" + (patients.length + 1));
    console.log();
  } else if (randomNumber === 3) {
    console.log(`There was an accident, doctor's hands do not grow from there`);
    console.log("-1 patient");
    patients.splice(patients.indexOf(patient), 1);
    console.log();
  }
}

function launch() {
  printInfo();
  for (let patient in patients) {
    patientFate(patient);
  }
}

launch();

// export { printInfo, randomChoise, patientFate };
