import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

interface PatientDetailsProps {
  patient: Patient;
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const { getPatientById, deletePatient } = usePatientStore();

  const handleUpdate = () => {
    getPatientById(patient.id);
  };

  const handleDelete = () => {
    deletePatient(patient.id);
    toast.success("Paciente eliminado correctamente.");
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailsItem label="ID: " data={patient.id} />
      <PatientDetailsItem label="Nombre: " data={patient.name} />
      <PatientDetailsItem label="Cuidador: " data={patient.caretaker} />
      <PatientDetailsItem label="Correo Electrónico: " data={patient.email} />
      <PatientDetailsItem label="Fecha Alta: " data={patient.date.toString()} />
      <PatientDetailsItem label="Síntomas: " data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={handleUpdate}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
