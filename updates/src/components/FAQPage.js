import React from 'react';
// import faq from '../images/faq.png'
import '../CSS/FAQPage.css'

class FAQPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question:<b>1. Why study abroad?</b>,
          answer: 'There is definitely a myriad of reasons as to why you should choose to study abroad. In case you plan to get international study abroad, it will be a combination of good quality of education, new culture, better resume, expanding employment prospects and widened mindset. Want to get a clear vision, choose the Abroad consultancy in Mumbai and grab hold of all the information.'
        },
        {
          id: 2,
          question: <b>2. Who can study abroad?</b>,
          answer: 'Anyone who is ready to take a chance and take a leap of exposure and experiences, study abroad is the best choice for you. However, it is better to get a good GPA (i.e. greater than 2.0 or higher) as suggested by the Study overseas consultants. You are likely to get a better chance of getting into the program.'
        },
        {
          id: 3,
          question: <b>3. Where can I study?</b>,
          answer: 'It is certainly not an easy task to choose and pick out where you plan to study abroad. However, it all depends on either or your personal interests, the cost, career prospects you choose to. Choose the country that fulfills your study program needs along with your safety and employment prospects. All this information can be guided to you by your Abroad consultancy in Mumbai.'
        },
        {
          id: 4,
          question:<b>4. When can I go?</b>,
          answer: 'As soon as you decide on the reason to go, you can choose to go. Depending on the various universities, the application deadlines will vary. The applications open in the early year of January and February until the mid of the year June and July. The programs usually start - off during the fall of September and October.'
        },
        {
          id: 5,
          question: <b>5. How long do study abroad programs take?</b>,
          answer: 'It depends on the level of degree you are pursuing. If you are planning for a full-time study, an undergraduate degree takes about 3 to 4 years. For most subjects is three years, especially in the UK. While in the US, the subject is for 4 years. Whereas a master’s degree takes about 1 to 2 years. However, a Ph.D. or doctoral program takes about 3 to 4 years.'
        },
        {
          id: 6,
          question: <b>6. How much does it cost?</b>,
          answer: 'n case you have enrolled in a foreign institution, you will be eligible to pay a tuition fee as well as one semester or full year fee. Apart from this, you will also be paying for your housing, food, and other essentials.'
        },
        {
          id: 7,
          question: <b>7. Will financial aid apply for tuition abroad?</b>,
          answer: 'Yes, you can always have options to choose scholarships. You can enroll in the university with help of Global Academia consultants in Mumbai and seek right information in regard to the same.'
        },
        {
          id: 8,
          question: <b>8. Can language be a barrier?</b>,
          answer: 'Language can be a major concern, however, if you are going to an English-speaking country - you only have to take care of it.  You can improve your skills and learn the language which would be an addition to your time you stay in abroad. You can also opt for programs from the help of Global Academia consultants in Mumbai who will help you get proper learning of the language.'
        },
        {
          id: 9,
          question: <b>9. What documentation shall I submit with my application for approval?</b>,
          answer: 'Passport for identification,A statement of purpose,CV or Resume-Academic references or the letter of recommendation-Certificate of your Secondary Education,English-language proficiency proof, usually, Certificate of TOEFL or IELTS certificate. Or, any other English Test Exam can also do,Test result admission i.e. GMAT or GRE for graduate programs.'
        },
        {
          id: 10,
          question: <b>10. Can I work during my studies abroad?</b>,
          answer: 'This will depend on whether or not your student visa allows you to work. In some countries there are restrictions on the amount of paid work you can undertake during your studies. Often there’s a limit of 20 hours’ paid work per week during term time, with full-time work permitted during holidays.If you don’t need a student visa, it is more likely you’ll be able to work as many hours as you like, as long as this doesn’t affect your studies – but check with the university and/or official government site. If you do work during your studies, it’s not a good idea to rely on your wages to fund living costs, and in many cases you’ll need to prove you already have enough money to support yourself when you apply for your visa.'
        }
      ],
      activeQuestion: null
    };
  }

  toggleQuestion(questionId) {
    this.setState({ activeQuestion: questionId });
  }

  render() {
    return (
      <div className='faqbg'>
        <h1>Welcome to Global Academia</h1>
        <br/>
        <h3>Here some FAQ's which might help you to assist with! </h3>
        <ul>
          {this.state.questions.map(question => (
            <li key={question.id}>
              <button onClick={() => this.toggleQuestion(question.id)}>
                {question.question}
              </button>
              {this.state.activeQuestion === question.id && (
                <p className='ans'>{question.answer}</p>
              )}
            </li>
          ))}
            <h2>For further Queries</h2>
            <h5>CONTACT Us </h5>
            <p>Email-globalAcademiaConsultants@gmail.com</p>
            <p>Call-9833004149</p>
        </ul>
      </div>
    );
  }
}

export default FAQPage;