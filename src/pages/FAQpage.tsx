import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: JSX.Element | string;
}

const FAQPage: React.FC = () => {
    const faqData: FAQItem[] = [
        {
          question: 'How does the application work?',
          answer: 'The application will be sent to Sponsors where they will approve or deny it.',
        },
        {
          question: 'How do I learn more about your organization?',
          answer: (
            <>
              Learn more about us on our <Link to="/about">About page</Link>!
            </>
          ),
        },
        {
          question: 'Who can I contact for support?',
          answer: 'You can reach out to our support team.',
        },
        {
          question: 'How do I reset my password?',
          answer:
            'To reset your password, click the "Forgot Password" link on the login page and follow the instructions sent to your email.',
        },
        {
          question: 'Is my data secure?',
          answer:
            'Yes, we prioritize data security and use industry-standard encryption to protect your information.',
        },
        {
          question: 'How do I update my account information?',
          answer:
            'To update your account details, go to your profile page and click the "Update Profile" button.',
        },
        {
          question: 'What browsers are supported?',
          answer:
            'Our application supports the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, ensure your browser is up to date.',
        },
        {
          question: 'Can I delete my account?',
          answer:
            'Yes, if you wish to delete your account, please contact our support team for assistance.',
        },
        {
          question: 'What should I do if I encounter a bug?',
          answer:
            'If you encounter a bug, please report it to our support team with details about the issue.',
        }
      ];
      

  // Track which FAQ items are expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the selected item
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Frequently Asked Questions</h1>
      <p>Here are some common questions and their answers:</p>

      <div>
        {faqData.map((faq, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            {/* Question */}
            <h3
              style={{
                cursor: 'pointer',
                color: '#007BFF', // Styling for the clickable question
              }}
              onClick={() => toggleExpand(index)}
            >
              {faq.question}
            </h3>

            {/* Answer (only show if expanded) */}
            {expandedIndex === index && (
              <div style={{ marginLeft: '1rem', fontSize: '0.9rem' }}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;