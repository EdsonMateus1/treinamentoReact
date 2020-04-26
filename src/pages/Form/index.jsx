import React from 'react';
import Logo from '../../assets/logo.png';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './styles.css';


export default function Form() {
    //const [title, settitle] = useState('');
    //const [category, setcategory] = useState('');
    //const [description, setdescription] = useState('');
    const history = useHistory();
    const { getFieldProps, isValid, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            title: "",
            category: "",
            description: "",
        },
        validationSchema: yup.object({
            title: yup
                .string()
                .required('preencha titulo'),
            category: yup
                .string()
                .required('preencha categoria'),
            description: yup
                .string()
                .required('preencha descricao'),

        }),
        onSubmit: async values => {
            const data = {
                title: values.title,
                category: values.category,
                description: values.description
            }
            try {
                await api.post('/idea/register', data);
                alert('cadastro realizado')
                history.push('/')
            } catch (error) {
                alert('erro no cadastro verifique se os campos esta preenchidos', error);
            }
        }
    })
    console.log('Fieldprops',getFieldProps('title'));
    
    return (
        <div className="form-container">
            <section className="intro-form-container">
                <header>
                    <img src={Logo} alt="uma imagem" ></img>
                </header>
                <main>
                    <p>
                        Ficar em casa em períodos longos, não deve ser nada fácil.
                    </p>
                    <p>
                        Iremos catalogar ideias, brincadeiras, jogos, filmes, livros, cursos, dicas e tudo que for necessário para tornar esse momento mais interessante.
                     </p>
                    <p>
                        Cadastre sua idea,coloque um titulo,uma categoria que sua idea se encaixe e a decricao da sua idea.
                    </p>
                </main>
            </section>


            <div className="content">
                <h1>Nova idea</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <input
                            type="text"
                            placeholder={errors.title && touched.title ? errors.title : "titulo"}
                            {...getFieldProps("title")}
                        
                        ></input>
                        <input
                            type="text"
                            placeholder={errors.category && touched.category ? errors.category : "categoria"}
                            {...getFieldProps("category")}
                        ></input>
                    </div>
                    <textarea
                        placeholder={errors.description && touched.description ? errors.description : "descricao"}
                        maxlength="600"
                        {...getFieldProps("description")}
                    ></textarea>
                    <button className="button2" type="submit" disabled={!isValid}>Salvar</button>
                </form>
            </div>
        </div>
    );
};
