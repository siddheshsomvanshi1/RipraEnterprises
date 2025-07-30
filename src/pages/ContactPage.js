import React from 'react';
import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section className={styles.contactSection}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>📞 Get In Touch</h2>
        <p>Have a project in mind or just want to say hello? We’d love to hear from you!</p>
      </motion.div>

      <div className={styles.contactContent}>
        {/* Contact Form */}
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>

        {/* Contact Info + Updated Map */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>📍 Studio Details</h3>
          <p><strong>Email:</strong> info@riprastudio.com</p>
          <p><strong>Phone:</strong> +91 9767893623</p>
          <p><strong>Address:</strong> Flat No 401,Maitri Park CHS.
S.No. 8/2+3 plot no 16,17, Vivekanand Society,Taljai Pathar,Dhankawadi Pune 43</p>

          <div className={styles.mapContainer}>
            <iframe
              title="Ripra Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5342.405687239662!2d73.84576009043928!3d18.474455981894852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebbdd3a32bcb%3A0x49ca60c4221e1d83!2sMaitri%20Park%20Co-Oprative%20Housing%20Society!5e0!3m2!1sen!2sin!4v1753451024669!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
