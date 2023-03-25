import React,{useState, useEffect} from'react'
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import ShortTextIcon from '@material-ui/icons/ShortText'
import SubjectIcon from '@material-ui/icons/Subject'
import MoreVert from '@material-ui/icons/MoreVert'
import { BsTrash } from 'react-icons/bs'
import { IconButton, Typography } from '@material-ui/core'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import { BsFileText } from 'react-icons/bs'
import Accordion from '@material-ui/core/Accordian'
import AccordionSummary from '@material-ui/core/AccordianSummary'
import AccordianDetails from '@material-ui/core/AccordianDetails'
import Button from '@material-ui/core/Button'
import { FcRightUp } from 'react-icons/fc'
import CloseIcon from '@material-ui/icons/Close'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import './Question_form.css'

function Question_form() {
    const [questions, setQuestions] = useState(
        [{questionText: "Which is the capital city of Karanataka ?",
          questionType: "Radio",
          options: [
            {optionText: "Bengaluru"},
            {optionText: "Belgavi"},
            {optionText: "Hubli"},
            {optionText: "Mandya"},
        ],
        open:true,
        required:false}]    
    )
    function questionsUI() {
        return questions.map((ques, i) => {
            <div>
            <Accordion expanded={ques.open} className={ques[i].open ? 'add border' : ""}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" elevation={1} style={{width:'100%'}}>
                    questions[i].open ? (
                        <div className='saved_questions'>

                        <Typography style={{fontSize:"15px", fontWeight:"400", letterSpacing:".1px", lineHeight:"24px",       paddingBottom:"8px"}}> 
                            {i+1}. {questions[i].questionText}</Typography>

                        {ques.options.map((op, j) => (
                            <div key={j}>
                                <div style={{display:"flex"}}>
                                    <FormControlLabel style={{marginLeft:'5px',marginBottom:'5px'}} disabled control={<input type={ques.questionType} color="primary" style={{marginRight:"3px"}} required={ques.type} />}>
                                        <Typography style={{fontFamily:'Roboto, Arial, sans-serif', fontSize:"13px", fontWeight:'400', letterSpacing:'.2px', lineHeight:'20px', color:"#202124"}}>
                                            {ques.options[j].optionText}
                                        </Typography> 
                                    </FormControlLabel>
                                </div>
                            </div>
                        ))}    
                        </div>
                    )
                </AccordionSummary>
            </Accordion>
            </div>
        })
    }

  return (
    <div>
        <div className='question_form'>
            <br></br>
            <div className='section'>
                <div className='question_title_section'>
                    <div className='question_form_top'>
                        <input type="text" className='question_form_top_name' style={{color:'black'}} placeholder="Untitled Document"></input>
                        <input type="text" className='question_form_top_desc' placeholder="Form Description"></input>
                    </div>
                </div>
                {questionsUI()}
            </div>
        </div>
    </div>
  )
}

export default Question_form