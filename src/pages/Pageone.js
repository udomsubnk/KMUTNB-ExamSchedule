import React from'react'
import Pagetwo from'./Pagetwo'
import { findCurrent } from '../api/current'
import OptionDropdownItem from '../components/OptionDropdownItem'
import { findCourse } from '../api/course'

export default class Pageone extends React.Component{

  constructor(){
    super()
    this.state = {
      currentName:[],
      coursesSelect:{
        laksoot:'',
        prapet:'',
        year:'',
        sec:'',
      },
      alertStatus:false
    }
    this.selectSubject = this.selectSubject.bind(this)
    this.checkCourses = this.checkCourses.bind(this)
    this.checkSections = this.checkSections.bind(this)
  }
 selectSubject(e){
    const { currentName } = this.state
    const value = e.target.value
    const success = findCurrent(value)
    this.setState({
      currentName:success
    })
  }

  checkCourses(e){
    const { coursesSelect } = this.state
    let value = e.target.value
    switch(value){
      case'A':
        coursesSelect.sec = 'A'
        break;
      case'B':
        coursesSelect.sec = 'B'
        break;
      case'C':
        coursesSelect.sec = 'C'
        break;
      case'1':
        coursesSelect.year = '1'
        break;
      case'2':
        coursesSelect.year = '2'
        break;
      case'3':
        coursesSelect.year = '3'
        break;
      case'4':
        coursesSelect.year = '4'
        break;
      case'R':
        coursesSelect.prapet = 'R'
        break;
      case'CSB':
        coursesSelect.prapet = 'CSB'
        break;
      case'D':
        coursesSelect.prapet = 'D'
        break;
      case'54040644':
        coursesSelect.laksoot = '54040644'
        break;
      case'59040644':
        coursesSelect.laksoot = '59040644'
        break;
    }
    this.setState({
      coursesSelect:coursesSelect
    })
    
  }
  
  checkSections(){
    const { alertStatus,coursesSelect } = this.state
    if(coursesSelect.laksoot== '' || coursesSelect.prapet== '' || coursesSelect.year== '' || coursesSelect.sec== ''){
      console.log('No') 
    }else{
      const courses = findCourse(coursesSelect)
      if(courses==''){
        console.log('No in NO') 
      }else{
        this.props.gotwo(courses)
      }
      
    }
  }

  render(){
    const { gotwo,alertStatus } = this.props
    const { currentName } = this.state
    const showOptionCurrent = currentName.map((res)=>
        <OptionDropdownItem key={ res.curr_id } currentNameprops={ res }/>
    )
    return(
      <div className="row">
        <div className="container middle">
          <form className="eiei">
            <div className="row m0">
              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>คณะ </label>
              </div>
              <div className="col-md-11 col-xs-10">
                <select className="form-control input-lg" onChange={ this.selectSubject } >
                  <option selected disabled>---เลือกคณะ---</option>
                  <option value="04">คณะวิทยาศาสตร์ประยุกต์</option>
                </select>
              </div>
            </div>
            <div className="row m0">
              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>หลักสูตร</label>
              </div>
              <div className="col-md-11 col-xs-10">
                <div className="dropdown">
                  <select className="form-control input-lg" onChange={ this.checkCourses }>
                    <option selected disabled >เลือกหลักสูตร</option>
                    { showOptionCurrent }
                  </select>
                </div>
              </div>
              </div>
              <div className="row m0">
                <div className="col-md-1 col-xs-2 text-center topic-text">
                  <label>ประเภทนักศึกษา</label>
                </div>
                <div className="col-md-5 col-xs-4">
                  <div className="dropdown">
                    <select className="form-control input-lg" onChange={ this.checkCourses }>
                      <option selected disabled>ประเภทนักศึกษา</option>
                      <option value="R">R ปกติรอบเช้า</option>
                      <option value="D">D โครงการสมทบพิเศษ</option>
                      <option value="CSB">BP โครงการสองภาษา</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-1 col-xs-2 text-center topic-text">
                  <label>ชั้นปี</label>
                </div>
                <div className="col-md-5 col-xs-4">
                  <div className="dropdown">
                    <div className="dropdown">
                      <select className="form-control input-lg" onChange={ this.checkCourses }>
                        <option selected disabled >เลือกปี</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    </div>
                  </div>
                </div>
              <div className="row m0">
                <div className="col-md-1 col-xs-2 text-center topic-text">
                  <label>ห้อง</label>
                </div>
                <div className="col-md-5 col-xs-4">
                  <div className="dropdown">
                    <div className="dropdown">
                      <select className="form-control input-lg" onChange={ this.checkCourses }>
                        <option selected disabled>เลือกห้อง</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-md-1 col-xs-2 text-center topic-text">
                  <label>รอบ</label>
                </div>
                <div className="col-md-5 col-xs-4">
                  <div className="dropdown">
                    <div className="dropdown">
                      <select className="form-control input-lg">
                        <option selected disabled>เลือกรอบ</option>
                        <option>R รอบเช้า</option>
                        <option>T รอบบ่าย</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m1">
                  <div className="col-md-12 col-xs-12">
                      <button type="button" onClick={ this.checkSections } className="btn btn-primary size-menu2 btn-lg btn1">ดึงวิชา</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
