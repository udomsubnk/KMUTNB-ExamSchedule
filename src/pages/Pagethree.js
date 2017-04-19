import React from'react'

class Pagethree extends React.Component{

  render(){
    const { tableStudy,tableFinal,tableMid,creditNum } = this.props
    return(
      <div className="container">
        <center><h1 className="zzz">Summary</h1></center>
        <center><h3>Credits : <span id="credits">0</span></h3></center>
        <center><h4 className="mgt20">Study Schudule</h4></center>
          <table className="table table-schedule table-responsive">
            <thead>
              <tr>
                <th></th>
                <th>8:00</th>
                <th>9:00</th>
                <th>10:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>13:00</th>
                <th>14:00</th>
                <th>15:00</th>
                <th>16:00</th>
                <th>17:00</th>
                <th>18:00</th>
                <th>19:00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td styles="color: #F3DF12;">Mon</td>
                <td id="item1"></td>
                <td id="item2"></td>
                <td id="item3"></td>
                <td id="item4"></td>
                <td id="item5"></td>
                <td id="item6"></td>
                <td id="item7"></td>
                <td id="item8"></td>
                <td id="item9"></td>
                <td id="item10"></td>
                <td id="item11"></td>
                <td id="item12"></td>
              </tr>
              <tr>
                <td styles="color:#E447B1;">Tue</td>
                <td id="item13"></td>
                <td id="item14"></td>
                <td id="item15"></td>
                <td id="item16"></td>
                <td id="item17"></td>
                <td id="item18"></td>
                <td id="item19"></td>
                <td id="item20"></td>
                <td id="item21"></td>
                <td id="item22"></td>
                <td id="item23"></td>
                <td id="item24"></td>
              </tr>
              <tr>
                <td styles="color:#11E454;">Wed</td>
                <td id="item25"></td>
                <td id="item26"></td>
                <td id="item27"></td>
                <td id="item28"></td>
                <td id="item29"></td>
                <td id="item30"></td>
                <td id="item31"></td>
                <td id="item32"></td>
                <td id="item33"></td>
                <td id="item34"></td>
                <td id="item35"></td>
                <td id="item36"></td>
              </tr>
              <tr>
                <td styles="color:#E4830E;">Thu</td>
                <td id="item37"></td>
                <td id="item38"></td>
                <td id="item39"></td>
                <td id="item40"></td>
                <td id="item41"></td>
                <td id="item42"></td>
                <td id="item43"></td>
                <td id="item44"></td>
                <td id="item45"></td>
                <td id="item46"></td>
                <td id="item47"></td>
                <td id="item48"></td>
              </tr>
              <tr>
                <td styles="color:#3083E4;">Fri</td>
                <td id="item49"></td>
                <td id="item50"></td>
                <td id="item51"></td>
                <td id="item52"></td>
                <td id="item53"></td>
                <td id="item54"></td>
                <td id="item55"></td>
                <td id="item56"></td>
                <td id="item57"></td>
                <td id="item58"></td>
                <td id="item59"></td>
                <td id="item60"></td>
              </tr>
              <tr>
                <td styles="color:#7F14C2;">Sat</td>
                <td id="item61"></td>
                <td id="item62"></td>
                <td id="item63"></td>
                <td id="item64"></td>
                <td id="item65"></td>
                <td id="item66"></td>
                <td id="item67"></td>
                <td id="item68"></td>
                <td id="item69"></td>
                <td id="item70"></td>
                <td id="item71"></td>
                <td id="item72"></td>
              </tr>
            </tbody>
          </table>
          <center><h4 className="mgt40">Exams Schedule</h4></center>
          <h4 className="mgt20">Midle exam Schedule</h4>
          <table className="table table-exams table-responsive">
            <thead>
              <tr>
                <th></th>
                <th>8:00</th>
                <th>9:00</th>
                <th>10:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>13:00</th>
                <th>14:00</th>
                <th>15:00</th>
                <th>16:00</th>
                <th>17:00</th>
                <th>18:00</th>
                <th>19:00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td styles="color: #F3DF12;">Mon<br/><span className="date">13/9/60</span></td>
                <td id="item-mid-1"></td>
                <td id="item-mid-2"></td>
                <td id="item-mid-3"></td>
                <td id="item-mid-4"></td>
                <td id="item-mid-5"></td>
                <td id="item-mid-6"></td>
                <td id="item-mid-7"></td>
                <td id="item-mid-8"></td>
                <td id="item-mid-9"></td>
                <td id="item-mid-10"></td>
                <td id="item-mid-11"></td>
                <td id="item-mid-12"></td>
              </tr>
              <tr>
                <td styles="color:#E447B1;">Tue<br/><span className="date">13/9/60</span></td>
                <td id="item-mid-13"></td>
                <td id="item-mid-14"></td>
                <td id="item-mid-15"></td>
                <td id="item-mid-16"></td>
                <td id="item-mid-17"></td>
                <td id="item-mid-18"></td>
                <td id="item-mid-19"></td>
                <td id="item-mid-20"></td>
                <td id="item-mid-21"></td>
                <td id="item-mid-22"></td>
                <td id="item-mid-23"></td>
                <td id="item-mid-24"></td>
              </tr>
              <tr>
                <td styles="color:#11E454;">Wed<br/><span className="date">13/9/60</span></td>
                <td id="item-mid-25"></td>
                <td id="item-mid-26"></td>
                <td id="item-mid-27"></td>
                <td id="item-mid-28"></td>
                <td id="item-mid-29"></td>
                <td id="item-mid-30"></td>
                <td id="item-mid-31"></td>
                <td id="item-mid-32"></td>
                <td id="item-mid-33"></td>
                <td id="item-mid-34"></td>
                <td id="item-mid-35"></td>
                <td id="item-mid-36"></td>
              </tr>
              <tr>
                <td styles="color:#E4830E;">Thu<br/><span className="date">13/9/60</span></td>
                <td id="item-mid-37"></td>
                <td id="item-mid-38"></td>
                <td id="item-mid-39"></td>
                <td id="item-mid-40"></td>
                <td id="item-mid-41"></td>
                <td id="item-mid-42"></td>
                <td id="item-mid-43"></td>
                <td id="item-mid-44"></td>
                <td id="item-mid-45"></td>
                <td id="item-mid-46"></td>
                <td id="item-mid-47"></td>
                <td id="item-mid-48"></td>
              </tr>
              <tr>
                <td styles="color:#3083E4;">Fri<br/><span className="date">13/9/60</span></td>
                <td id="item-mid-49"></td>
                <td id="item-mid-50"></td>
                <td id="item-mid-51"></td>
                <td id="item-mid-52"></td>
                <td id="item-mid-53"></td>
                <td id="item-mid-54"></td>
                <td id="item-mid-55"></td>
                <td id="item-mid-56"></td>
                <td id="item-mid-57"></td>
                <td id="item-mid-58"></td>
                <td id="item-mid-59"></td>
                <td id="item-mid-60"></td>
              </tr>
              <tr>
                <td styles="color:#7F14C2;">Sat<br/><span className="date">13/9/60</span></td>
                <td id="item-mid-61"></td>
                <td id="item-mid-62"></td>
                <td id="item-mid-63"></td>
                <td id="item-mid-64"></td>
                <td id="item-mid-65"></td>
                <td id="item-mid-66"></td>
                <td id="item-mid-67"></td>
                <td id="item-mid-68"></td>
                <td id="item-mid-69"></td>
                <td id="item-mid-70"></td>
                <td id="item-mid-71"></td>
                <td id="item-mid-72"></td>
              </tr>
            </tbody>
          </table>
          <h4 className="mgt20">Final exam Schedule</h4>
          <table className="table table-exams-final table-responsive">
            <thead>
              <tr>
                <th></th>
                <th>8:00</th>
                <th>9:00</th>
                <th>10:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>13:00</th>
                <th>14:00</th>
                <th>15:00</th>
                <th>16:00</th>
                <th>17:00</th>
                <th>18:00</th>
                <th>19:00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td styles="color: #F3DF12;">Mon<br/><span className="date">13/5/60</span></td>
                <td id="item-final-1"></td>
                <td id="item-final-2"></td>
                <td id="item-final-3"></td>
                <td id="item-final-4"></td>
                <td id="item-final-5"></td>
                <td id="item-final-6"></td>
                <td id="item-final-7"></td>
                <td id="item-final-8"></td>
                <td id="item-final-9"></td>
                <td id="item-final-10"></td>
                <td id="item-final-11"></td>
                <td id="item-final-12"></td>
              </tr>
              <tr>
                <td styles="color:#E447B1;">Tue<br/><span className="date">13/5/60</span></td>
                <td id="item-final-13"></td>
                <td id="item-final-14"></td>
                <td id="item-final-15"></td>
                <td id="item-final-16"></td>
                <td id="item-final-17"></td>
                <td id="item-final-18"></td>
                <td id="item-final-19"></td>
                <td id="item-final-20"></td>
                <td id="item-final-21"></td>
                <td id="item-final-22"></td>
                <td id="item-final-23"></td>
                <td id="item-final-24"></td>
              </tr>
              <tr>
                <td styles="color:#11E454;">Wed<br/><span className="date">13/5/60</span></td>
                <td id="item-final-25"></td>
                <td id="item-final-26"></td>
                <td id="item-final-27"></td>
                <td id="item-final-28"></td>
                <td id="item-final-29"></td>
                <td id="item-final-30"></td>
                <td id="item-final-31"></td>
                <td id="item-final-32"></td>
                <td id="item-final-33"></td>
                <td id="item-final-34"></td>
                <td id="item-final-35"></td>
                <td id="item-final-36"></td>
              </tr>
              <tr>
                <td styles="color:#E4830E;">Thu<br/><span className="date">13/5/60</span></td>
                <td id="item-final-37"></td>
                <td id="item-final-38"></td>
                <td id="item-final-39"></td>
                <td id="item-final-40"></td>
                <td id="item-final-41"></td>
                <td id="item-final-42"></td>
                <td id="item-final-43"></td>
                <td id="item-final-44"></td>
                <td id="item-final-45"></td>
                <td id="item-final-46"></td>
                <td id="item-final-47"></td>
                <td id="item-final-48"></td>
              </tr>
              <tr>
                <td styles="color:#3083E4;">Fri<br/><span className="date">13/5/60</span></td>
                <td id="item-final-49"></td>
                <td id="item-final-50"></td>
                <td id="item-final-51"></td>
                <td id="item-final-52"></td>
                <td id="item-final-53"></td>
                <td id="item-final-54"></td>
                <td id="item-final-55"></td>
                <td id="item-final-56"></td>
                <td id="item-final-57"></td>
                <td id="item-final-58"></td>
                <td id="item-final-59"></td>
                <td id="item-final-60"></td>
              </tr>
              <tr>
                <td styles="color:#7F14C2;">Sat<br/><span className="date">13/5/60</span></td>
                <td id="item-final-61"></td>
                <td id="item-final-62"></td>
                <td id="item-final-63"></td>
                <td id="item-final-64"></td>
                <td id="item-final-65"></td>
                <td id="item-final-66"></td>
                <td id="item-final-67"></td>
                <td id="item-final-68"></td>
                <td id="item-final-69"></td>
                <td id="item-final-70"></td>
                <td id="item-final-71"></td>
                <td id="item-final-72"></td>
              </tr>
            </tbody>
          </table>
          <span id="btn-course1" styles="display: none;">Add</span>
          <span id="btn-course2" styles="display: none;">Add</span>
          <span id="btn-course3" styles="display: none;">Add</span>
          <input type="text" className="form-control" placeholder="https://www.precourse.com/?ids[0]=586ffaf2f69160005187e661&ids[1]=586ffaf2f69160005187e663" id="url"/>
          <a href="/file/5704062616518122559">
            <button type="button" className="btn btn-primary btn-lg export">Export to calendar</button>
          </a>
      </div>




    )
  }
}
export default Pagethree;
