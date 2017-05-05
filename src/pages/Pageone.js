import React from'react'
import Pagetwo from'./Pagetwo'
import { findCurrent } from '../api/current'
import OptionDropdownItem from '../components/OptionDropdownItem'
// import { findCourse } from '../api/course'
import { chooseCourse } from '../api/course'
import {ProgressOne} from '../components/Progress'

export default class Pageone extends React.Component{
  constructor(){
    super()
    this.state = {
      currentName:[],
      coursesSelect:{
        kana:'',
        laksoot:'',
        prapet:'',
        year:'',
        sec:'',
        rob:''
      },
      alertStatus:false
    }
    this.selectSubject = this.selectSubject.bind(this)
    this.checkCourses = this.checkCourses.bind(this)
    this.checkSections = this.checkSections.bind(this)
  }
  componentDidMount(){
      act('processbar-p1');
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
    //คณะ : '01' - '14'
    //ลหักสูตร : '404001'
    //ประเภท : ตัวอัพษร 1-2 ตัว
    //ชั้นปี : ตัวเลข 1 ตัว
    //ห้อง : ตัวอักษณ 1 ตัว
    //รอบ 'R','T'
    if(value != undefined){
      if(value.match(/[0-9]/g)){
        
        if(value.match(/[0-9]/g).length==2){ 
          //คณะ
          this.selectSubject(e)
          coursesSelect.kana = value;
        }else if(value.match(/[0-9]/g).length>2){
          //หลักสูตร
          coursesSelect.laksoot = value;
        }else if(value.match(/[0-9]/g).length == 1){
          //ชั้นปี
          coursesSelect.year = value;
        }
      }else {
        if(value.match(/[A-Z]/g).length <=2){
          if(value.split('-')[0]=='room'){
            //ห้อง
            coursesSelect.sec = value.split('-')[1];
          }else{
            //ประเภท
            coursesSelect.prapet = value;
          }
        }else if(value.match(/[0-9]/g).length == 1){
          //ชั้นปี
          coursesSelect.year = value;
        }else if(value=='R'){
          coursesSelect.rob = value
        }else if(value=='T'){
          coursesSelect.rob = value
        }
      }
    }
    this.setState({
      coursesSelect:coursesSelect
    })
    
  }

  checkSections(){
    const { alertStatus,coursesSelect } = this.state
    if(coursesSelect.laksoot== '' || coursesSelect.prapet== '' || coursesSelect.year== '' || coursesSelect.sec== ''){
      this.props.gotwo(courses)
      return;
    }
    chooseCourse(coursesSelect,this.props.gotwo)
  }

  render(){
    const { gotwo,alertStatus } = this.props
    const { currentName ,coursesSelect} = this.state
    console.log(coursesSelect)
    const showOptionCurrent = currentName.map((res)=>
        <OptionDropdownItem key={ res.curr_id } currentNameprops={ res }/>
    )
    return(
      <div className="row moveInBottom">
        <div className="container middle word-1">
          <form className="eiei">
            <div className="row m0">
              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>คณะ </label>
              </div>
              <div className="col-md-11 col-xs-10">
                <select className="form-control input-lg z-depth-2" onChange={ this.checkCourses } >
                  <option selected disabled>---เลือกคณะ---</option>
                  <option value="01">คณะวิศวกรรมศาสตร์</option>
                  <option value="02">คณะครุศาสตร์อุตสาหกรรม</option>
                  <option value="03">คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม</option>
                  <option value="04">คณะวิทยาศาสตร์ประยุกต์</option>
                  <option value="05">คณะอุตสาหกรรมเกษตร</option>
                  <option value="06">คณะเทคโนโลยีและการจัดการอุตสาหกรรม</option>
                  <option value="07">คณะเทคโนโลยีและสารสนเทศ</option>
                  <option value="08">คณะศิลปศาสตร์ประยุกต์</option>
                  <option value="09">บัณฑิตวิทยาลัยวิศวกรรมศาสตร์นานาชาติฯ</option>
                  <option value="10">บัณฑิตวิทยาลัย</option>
                  <option value="11">คณะสถาปัตยกรรมและการออกแบบ</option>
                  <option value="12">คณะวิศวกรรมศาสตร์และเทคโนโลยี</option>
                  <option value="13">คณะวิทยาศาสตร์ พลังงานและสิ่งแวดล้อม</option>
                  <option value="14">คณะบริหารธุรกิจ</option>
                  <option value="15">วิทยาลัยนานาชาติ</option>
                  <option value="16">คณะพัฒนาธุรกิจและอุตสาหกรรม</option>
                  <option value="17">คณะบริหารธุรกิจและอุตสาหกรรมบริการ</option>
                </select>
              </div>
            </div>
            <div className="row m0">
              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>หลักสูตร</label>
              </div>
              <div className="col-md-11 col-xs-10">
                <div className="dropdown">
                  <select className="form-control input-lg z-depth-2" onChange={ this.checkCourses }>
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
                    <select className="form-control input-lg z-depth-2" onChange={ this.checkCourses }>
                      <option selected disabled>ประเภทนักศึกษา</option>
                      <option value="R">R ปกติรอบเช้า</option>
                      <option value="T">T ปกติรอบบ่าย</option>
                      <option value="H">H โครงการความร่วมมือกับกรมอาชีวศึกษาฯ</option>
                      <option value="S">S โครงการครูประจำการ</option>
                      <option value="A">A ช่างฝึกหัด</option>
                      <option value="O">O โครงการเร่งรัดการผลิตบัณฑิต</option>
                      <option value="D">D โครงการสมทบพิเศษ</option>
                      <option value="N">N โครงการเครือข่ายฯ</option>
                      <option value="HM">HM โครงการพัฒนาผู้บริหารด้านการจัดการอุตสาหกรรม</option>
                      <option value="E">E นักศึกษาพิเศษ</option>
                      <option value="L">L นักศึกษาโครงการลาว</option>
                      <option value="B">B นักศึกษาปรับพื้น</option>
                      <option value="X">X โครงการพัฒนาผู้บริหารด้านอุตสาหกรรม</option>
                      <option value="DP">DP โครงการสมทบพิเศษ(CSs ปราจีนบุรี)</option>
                      <option value="BP">BP โครงการสองภาษา</option>
                      <option value="EP">EP โครงการภาษาอังกฤษ</option>
                      <option value="DE">DE โครงการเสริมทักษะภาษาอังกฤษ</option>
                      <option value="IP">IP โครงการนานาชาติ</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-1 col-xs-2 text-center topic-text">
                  <label>ชั้นปี</label>
                </div>
                <div className="col-md-5 col-xs-4">
                  <div className="dropdown">
                    <div className="dropdown">
                      <select className="form-control input-lg z-depth-2" onChange={ this.checkCourses }>
                        <option selected disabled >เลือกปี</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
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
                      <select className="form-control input-lg  z-depth-2" onChange={ this.checkCourses }>
                        <option selected disabled>เลือกห้อง</option>
                        <option value="room-A">A</option>
                        <option value="room-B">B</option>
                        <option value="room-C">C</option>
                        <option value="room-D">D</option>
                        <option value="room-E">E</option>
                        <option value="room-F">F</option>
                        <option value="room-G">G</option>
                        <option value="room-H">H</option>
                        <option value="room-I">I</option>
                        <option value="room-J">J</option>
                        <option value="room-K">K</option>
                        <option value="room-L">L</option>
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
                      <select className="form-control input-lg z-depth-2">
                        <option selected disabled>เลือกรอบ</option>
                        <option value="R">R รอบเช้า</option>
                        <option value="T">T รอบบ่าย</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m1">
                  <div className="col-md-12 col-xs-12">
                      <button type="button" onClick={ this.checkSections } className="btn btn-Blue size-menu2 btn-lg btn1 z-depth-2">ดึงวิชา</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
