import { Col, Row } from 'react-bootstrap';
import './formulario.css';
import { useForm } from "react-hook-form";
import Boton from '../boton/Boton';

// iconos
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        // Aquí puedes hacer lo que necesites con los datos del formulario
        console.log(data);
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Row className="name-tel">
                    <Col md={6}>
                        <input type="text" className="validate" placeholder="Nombre" {...register('name', { required: true })} />
                        {errors.name && <span className="error-message">Este campo es obligatorio</span>}
                    </Col>
                    <Col md={6}>
                        <input type="text" className="validate" placeholder="Teléfono" {...register('phone', { required: true, pattern: /^[0-9]+$/ })} />
                        {errors.phone && errors.phone.type === "pattern" && <span className="error-message">Este campo solo puede contener números</span>}
                    </Col>
                </Row>
                <p className="email">
                    <input type="text" className="validate" placeholder="Correo" {...register('email', { required: true })} />
                    {errors.email && <span className="error-message">Este campo es obligatorio</span>}
                </p>
                <p className="mensaje">
                    <textarea className="validate-mensaje" placeholder="Mensaje" {...register('mensaje', { required: true })} />
                    {errors.mensaje && <span className="error-message">Este campo es obligatorio</span>}
                </p>
                <div className="submit">
                    <Boton className='boton-enviar' name='enviar' disabled={Object.keys(errors).length > 0} />
                    <div className="box-iconos">
                    <FaLinkedinIn className="icono" />
                    <FiGithub className="icono" />
                    <MdOutlineEmail className="icono" />
                    <FaWhatsapp className="icono" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Formulario;
