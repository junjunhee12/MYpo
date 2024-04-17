import Container from "./Container";
import styles from "./Contact.module.css";
import emailjs from 'emailjs-com';
import { useState } from "react";
function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const emailchange = (e) => {
        setEmail(e.target.value);
    };

    const namechange = (e) => {
        setName(e.target.value);
    };

    const messagechange = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('service_0dpv9vl', 'template_qyug0qe', templateParams, 'E1aULCiLWko3BMO7e')
            .then(() => {
                console.log('이메일 전송 성공');
                alert("이메일이 성공적으로 보내졌습니다.");
            }, (error) => {
                console.error('이메일 전송 실패:', error);
                alert("이메일을 보내는데 실패하였습니다.");
            });

        // 폼 초기화
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Container>
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h4>CONTACT (제작중 입니다....)</h4>
                        <div className={styles.email}>
                            <h2>Contact With Me</h2>
                            <span>전준희에게 Email보내기</span>
                        </div>
                    </div>
                    <div className={styles.contact_me}>
                        <div className={styles.left}>
                            <div className={styles.card}>
                                <div className={styles.icon1}>
                                    <i className={styles.fa_solid1}>중요!</i>
                                </div>
                                <div className={styles.info_text1}>
                                    <p>이름을 적어주세요!</p>
                                    <p>이메일을 적어주세요!</p>
                                    <p>보낼 내용을 적어주세요!</p>
                                </div>
                            </div>
                            {/* 나머지 코드는 그대로 사용 */}
                        </div>
                        <div className={styles.right}>
                            <form onSubmit={sendEmail} className={styles.card2}>
                                <div className={styles.form_group}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        onChange={namechange}
                                        value={name}
                                        name="name"
                                        type="text"
                                        id="name"
                                        placeholder="작성자의 이름이나 회사명을 적어주세요"
                                        required
                                    />
                                </div>
                                <div className={styles.form_group}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        onChange={emailchange}
                                        value={email}
                                        name="email"
                                        type="email"
                                        id="email"
                                        autoComplete="off"
                                        placeholder="작성자의 이메일을 작성해주세요"
                                        required
                                    />
                                </div>
                                <div className={styles.form_group}>
                                    <label htmlFor="msg">Contents</label>
                                    <textarea
                                        onChange={messagechange}
                                        value={message}
                                        name="message"
                                        id="msg"
                                        placeholder="전준희에게 보낼 내용을 작성해주시면 됩니다."
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className={styles.send}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Contact;
