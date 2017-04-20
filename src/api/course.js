import { findSectionFromSection_id } from './section'
exports.findCourse = function(data){
	var value = data.prapet+data.sec+data.year
	if(data.laksoot=='54040644'){	//1 2 3
		if(data.year!='1'){
			return chooseCourse(value)
		}else
			return []
	}else if(data.laksoot=='59040644'){	//4
		if(data.year=='1'){
			return chooseCourse(value)
		}else
			return []
	}else
		return []
}
var chooseCourse = function(sec){
	var ob = []
	console.log(sec)
	for(var i=0;i<course.length;i++){
		if(course[i].SEC == sec){
			for(var j=0;j<course[i].section_id.length;j++){
				let temp = findSectionFromSection_id(course[i].section_id[j])
				ob.push(temp)
			}
		}
	}
	if(ob.length == 0){
		ob=''
	}
	return ob
}
var course =[
	{"SEC":"RA1","section_id":["2377","2855","2856","2865","2771","2870","3489","3490"]},
	{"SEC":"RB1","section_id":["2377","2855","2856","2865","2771","2870","3489","3490"]},
	{"SEC":"RC1","section_id":["2377","2871","2771","2857","2858","3489","3490","2866"]},
	{"SEC":"DA1","section_id":["2378","2867","2771","2859","2860","3487","2872"]},
	{"SEC":"DB1","section_id":["2378","2771","2873","2868","3488","2862","2861"]},
	{"SEC":"CSBA1","section_id":["2378","2874","2771","2869","2863","2864","3491"]},

	{"SEC":"RA2","section_id":["3548","2430","2308","2875","2884","2879","3551"]},
	{"SEC":"RB2","section_id":["3548","2430","2308","2875","2884","2879","3551"]},
	{"SEC":"RC2","section_id":["3548","2430","2308","2876","2885","2880","3551"]},
	{"SEC":"DA2","section_id":["2881","2886","2877","2431","2310","3551"]},
	{"SEC":"DB2","section_id":["2878","2887","2882","2431","2310","3552"]},
	{"SEC":"CSBA2","section_id":["3549","2430","2883","2875","2905","2311","2888"]},

	{"SEC":"RA3","section_id":["2906","2907","2901","2912","2897","2917","2890","2889","2929","2922"]},
	{"SEC":"RB3","section_id":["2906","2907","2901","2912","2897","2917","2890","2889","2929","2922"]},
	{"SEC":"RC3","section_id":["2913","2891","2892","2918","2902","2898","2909","2908","2929","2922"]},
	{"SEC":"DA3","section_id":["2907","2906","2919","2899","2894","2893","2914","2903","2930","2922"]},
	{"SEC":"DB3","section_id":["2900","2910","2911","2896","2895","2915","2920","2904","2930","2922"]},
	{"SEC":"CSBA3","section_id":["2932","2921","2899","2916","2905","2890","2889","2922"]},

	{"SEC":"RA4","section_id":["2923","2933","3909","2931","2934","2924"]},
	{"SEC":"RB4","section_id":["2923","2933","3909","2931","2934","2924"]},
	{"SEC":"RC4","section_id":["2923","2933","3909","2931","2934","2925"]},
	{"SEC":"DA4","section_id":["2923","2933","3908","2931","2934","2926"]},
	{"SEC":"DB4","section_id":["2928","2923","2933","3908","2931","2934","2928"]},
	{"SEC":"CSBA4","section_id":[]},
	
]
