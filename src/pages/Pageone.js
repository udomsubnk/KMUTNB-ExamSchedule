import React from'react'
import Pagetwo from'./Pagetwo'
import { findCurrent } from '../api/current'
import OptionDropdownItem from '../components/OptionDropdownItem'
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
      }

      
    }
    this.selectSubject = this.selectSubject.bind(this)
    this.checkCourses = this.checkCourses.bind(this)
  }

  selectSubject(e){
    const { currentName } = this.state
    const value = e.target.value
    const success = findCurrent(value)
    this.setState({
      currentName:success
    })
  }

  checkCourses(){
    const { coursesSelect } = this.state
    console.log(coursesSelect)
  }
  render(){
    const { gotwo } = this.props
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
                  <select className="form-control input-lg">
                    <option selected disabled onChange={ this.checkCourses }>เลือกหลักสูตร</option>
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
                      <option value="ddddd">R ปกติรอบเช้า</option>
                      <option>T ปกติรอบบ่าย</option>
                      <option>H โครงการความร่วมมือกับกรมอาชีวศึกษาฯ</option>
                      <option>S โครงการครูประจำการ</option>
                      <option>A ช่างฝึกหัด</option>
                      <option>O โครงการเร่งรัดการผลิตบัณฑิต</option>
                      <option>D โครงการสมทบพิเศษ</option>
                      <option>N โครงการเครือข่ายฯ</option>
                      <option>HM โครงการพัฒนาผู้บริหารด้านการจัดการอุตสาหกรรม</option>
                      <option>E นักศึกษาพิเศษ</option>
                      <option>L นักศึกษาโครงการลาว</option>
                      <option>B นักศึกษาปรับพื้น</option>
                      <option>X โครงการพัฒนาผู้บริหารด้านอุตสาหกรรม</option>
                      <option>DP โครงการสมทบพิเศษ(CSs ปราจีนบุรี)</option>
                      <option>BP โครงการสองภาษา</option>
                      <option>EP โครงการภาษาอังกฤษ</option>
                      <option>DE โครงการเสริมทักษะภาษาอังกฤษ</option>
                      <option>IP โครงการนานาชาติ</option>
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
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
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
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                        <option>F</option>
                        <option>G</option>
                        <option>H</option>
                        <option>I</option>
                        <option>J</option>
                        <option>K</option>
                        <option>L</option>
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
                      <button type="button" onClick={ ()=> gotwo() } className="btn btn-primary size-menu2 btn-lg btn1">ดึงวิชา</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
