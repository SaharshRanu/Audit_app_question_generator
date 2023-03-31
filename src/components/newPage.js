<div>
                <Accordion expanded={ques.open} className={ques[i].open ? 'add border' : ""} >

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" elevation={1} style={{width:'100%'}}>
                    {questions[i].open ? (
                        <div className='saved_questions'>

                        <Typography style={{fontSize:"15px", fontWeight:"400", letterSpacing:".1px", lineHeight:"24px", paddingBottom:"8px"}}> 
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
                    ):""}
                    </AccordionSummary>

                <div className='question_boxes'>
                    <AccordionDetails className='add_question'>
                        <div className="add_question_top">
                            <input className='queston' type="text" placeholder='Question' value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value, i)}}></input>
                            <CropOriginalIcon style={{color:"#5f6368"}} />
                            <Select className='Select' style={{color:'#5f6368', fontSize:'13px'}}>
                                <MenuItem id='text' value="Text" onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight:"10px"}} />Paragraph</MenuItem>
                                <MenuItem id='checkbox' value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}><CheckBoxIcon style={{marginRight:"10px", color:'#70757a'}} checked />CheckBoxes</MenuItem>
                                <MenuItem id='radio' value='Radio' onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px", color:'#70757a'}} />Multiple Choice</MenuItem>
                            </Select>
                        </div>
                        {ques.options.map((op,j) =>(
                            <div className='add_question_body' key={j}>
                                {
                                    (ques.questionType!=="text") ?
                                    <input type={ques.questionType} style={{marginRight:"10px"}} />:
                                    <ShortTextIcon style={{marginRight:"10px"}}/>
                                }
                                <div>
                                    <input type="text" className='text_input' placeholder='option' value={ques.options[j].optionText}  onChange={(e)=>{changeOptionvalue(e.target.value, i, j)}}></input>
                                    <CropOriginalIcon style={{color:"#5f6368"}}/>
                                    <IconButton aria-label='delete'>
                                        <CloseIcon onChange={()=>{removeOption(i, j)}}/>
                                    </IconButton>
                                </div>
                            </div>
                        ))}
                        {ques.options.length < 5 ?(
                            <div className='add_question_body'>
                                <FormControlLabel disabled control={

                                    (ques.questionType!=="text") ?
                                    <input type={ques.questionType} color="primary" inputProps={{'aria-label':'secondary checkbox'}}
                                        style={{marginLeft:"10px", marginRight:'10px'}} disabled /> :
                                    <ShortTextIcon style={{marginRight:'10px'}} />
                                    } label={
                                    <div>
                                        <input type='text' className='text_input' style={{fontSize:'13px', width:'60px'}} placeholder="Add Other"></input>
                                        <Button size='small' onClick={()=>{addOption(i)}} style={{textTransform:'none', color:'#4285f4', fontSize:'13px', fontWeight:"600"}}>Add Option</Button> 
                                    </div>
                                    }></FormControlLabel>
                            </div>
                        ):''}
                        <div className='add_footer'>
                            <div className='add_question_bottom_left'>
                                <Button size='small' style={{textTransform:'none', color:'#4285f4', fontSize:'13px', fontWeight:'600'}}>
                                    <FcRightUp style={{border:'2px solid #4285f4', padding:'2px', marginRight:'8px'}}/>
                                    Answer Key
                                </Button>
                            </div>
                            <div className='add_question_bottom'>

                                <IconButton aria-label='Copy' onClick={()=>{copyQuestion(i)}}>
                                    <FilterNoneIcon />
                                </IconButton>

                                <IconButton aria-label='delete' onClick={()=>{deleteQuestion(i)}}>
                                    <BsTrash />
                                </IconButton>
                                <span style={{color:"#5f6368", fontSize:'13px'}}>Required</span> <Switch name='checkedA' color='primary' onClick={()=>{requiredQuestion()}} checked={{open:true, required:false}}></Switch>

                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>

                            </div>
                        </div>
                    </AccordionDetails> 
                    <div className='question_edit'>
                        <AddCircleOutlineIcon className='edit' onClick={addMoreQuestionField} />
                        <OndemandVideoIcon className='edit' />
                        <CropOriginalIcon className='edit' />
                        <TextFieldsIcon className='edit' />
                    </div>
                </div>
                </Accordion>
            </div>