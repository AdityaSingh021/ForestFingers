import React, { useEffect, useState } from 'react'
import './type_container.css';
import Chart from "react-apexcharts";
import axios from 'axios';
import Lottie from 'lottie-react';
import reset from './images/Reset.json';
function TypeContainer() {
  const [randomText, setRandomText] = useState("");
  const [accuracy,setAccuracy]=useState(0);
  const [wpm,setWpm]=useState(0);
  const [currentTime,setCurrentTime]=useState(0);
  const [storeAccuracy,setStoreAccuracy]=useState([]);
  const [storeWpm,setStoreWpm]=useState([]);
  const [timerId,setTimerId]=useState(0);
  const [runningState,setRunningState]=useState(true);
  const [startTimer,setStartTimer]=useState(true);
  const [currLenght,setCurrentLength]=useState(0);
  const [finalTime,setFinalTIme]=useState(30);
  const words=["the" ,"of" ,"to" ,"and" ,"a" ,"in" ,"is" ,"it" ,"you" ,"that" ,"he" ,"was" ,"for" ,"on" ,"are" ,"with" ,"as" ,"I" ,"his" ,"they" ,"be" ,"at" ,"one" ,"have" ,"this" ,"from" ,"or" ,"had" ,"by" ,"not" ,"word" ,"but" ,"what" ,"some" ,"we" ,"can" ,"out" ,"other" ,"were" ,"all" ,"there" ,"when" ,"up" ,"use" ,"your" ,"how" ,"said" ,"an" ,"each" ,"she" ,"which" ,"do" ,"their" ,"time" ,"if" ,"will" ,"way" ,"about" ,"many" ,"then" ,"them" ,"write" ,"would" ,"like" ,"so" ,"these" ,"her" ,"long" ,"make" ,"thing" ,"see" ,"him" ,"two" ,"has" ,"look" ,"more" ,"day" ,"could" ,"go" ,"come" ,"did" ,"number" ,"sound" ,"no" ,"most" ,"people" ,"my" ,"over" ,"know" ,"water" ,"than" ,"call" ,"first" ,"who" ,"may" ,"down" ,"side" ,"been" ,"now" ,"find" ,"any" ,"new" ,"work" ,"part" ,"take" ,"get" ,"place" ,"made" ,"live" ,"where" ,"after" ,"back" ,"little" ,"only" ,"round" ,"man" ,"year" ,"came" ,"show" ,"every" ,"good" ,"me" ,"give" ,"our" ,"under" ,"name" ,"very" ,"through" ,"just" ,"form" ,"sentence" ,"great" ,"think" ,"say" ,"help" ,"low" ,"line" ,"differ" ,"turn" ,"cause" ,"much" ,"mean" ,"before" ,"move" ,"right" ,"boy" ,"old" ,"too" ,"same" ,"tell" ,"does" ,"set" ,"three" ,"want" ,"air" ,"well" ,"also" ,"play" ,"small" ,"end" ,"put" ,"home" ,"read" ,"hand" ,"port" ,"large" ,"spell" ,"add" ,"even" ,"land" ,"here" ,"must" ,"big" ,"high" ,"such" ,"follow" ,"act" ,"why" ,"ask" ,"men" ,"change" ,"went" ,"light" ,"kind" ,"off" ,"need" ,"house" ,"picture" ,"try" ,"us" ,"again" ,"animal" ,"point" ,"mother" ,"world" ,"near" ,"build" ,"self" ,"earth" ,"father" ,"head" ,"stand" ,"own" ,"page" ,"should" ,"country" ,"found" ,"answer" ,"school" ,"grow" ,"study" ,"still" ,"learn" ,"plant" ,"cover" ,"food" ,"sun" ,"four" ,"between" ,"state" ,"keep" ,"eye" ,"never" ,"last" ,"let" ,"thought" ,"city" ,"tree" ,"cross" ,"farm" ,"hard" ,"start" ,"might" ,"story" ,"saw" ,"far" ,"sea" ,"draw" ,"left" ,"late" ,"run" ,"don't" ,"while" ,"press" ,"close" ,"night" ,"real" ,"life" ,"few" ,"north" ,"open" ,"seem" ,"together" ,"next" ,"white" ,"children" ,"begin" ,"got" ,"walk" ,"example" ,"ease" ,"paper" ,"group" ,"always" ,"music" ,"those" ,"both" ,"mark" ,"often" ,"letter" ,"until" ,"mile" ,"river" ,"car" ,"feet" ,"care" ,"second" ,"book" ,"carry" ,"took" ,"science" ,"eat" ,"room" ,"friend" ,"began" ,"idea" ,"fish" ,"mountain" ,"stop" ,"once" ,"base" ,"hear" ,"horse" ,"cut" ,"sure" ,"watch" ,"color" ,"face" ,"wood" ,"main" ,"enough" ,"plain" ,"girl" ,"usual" ,"young" ,"ready" ,"above" ,"ever" ,"red" ,"list" ,"though" ,"feel" ,"talk" ,"bird" ,"soon" ,"body" ,"dog" ,"family" ,"direct" ,"pose" ,"leave" ,"song" ,"measure" ,"door" ,"product" ,"black" ,"short" ,"numeral" ,"class" ,"wind" ,"question" ,"happen" ,"complete" ,"ship" ,"area" ,"half" ,"rock" ,"order" ,"fire" ,"south" ,"problem" ,"piece" ,"told" ,"knew" ,"pass" ,"since" ,"top" ,"whole" ,"king" ,"space" ,"heard" ,"best" ,"hour" ,"better" ,"true" ,"during" ,"hundred" ,"five" ,"remember" ,"step" ,"early" ,"hold" ,"west" ,"ground" ,"interest" ,"reach" ,"fast" ,"verb" ,"sing" ,"listen" ,"six" ,"table" ,"travel" ,"less" ,"morning" ,"ten" ,"simple" ,"several" ,"vowel" ,"toward" ,"war" ,"lay" ,"against" ,"pattern" ,"slow" ,"center" ,"love" ,"person" ,"money" ,"serve" ,"appear" ,"road" ,"map" ,"rain" ,"rule" ,"govern" ,"pull" ,"cold" ,"notice" ,"voice" ,"unit" ,"power" ,"town" ,"fine" ,"certain" ,"fly" ,"fall" ,"lead" ,"cry" ,"dark" ,"machine" ,"note" ,"wait" ,"plan" ,"figure" ,"star" ,"box" ,"noun" ,"field" ,"rest" ,"correct" ,"able" ,"pound" ,"done" ,"beauty" ,"drive" ,"stood" ,"contain" ,"front" ,"teach" ,"week" ,"final" ,"gave" ,"green" ,"oh" ,"quick" ,"develop" ,"ocean" ,"warm" ,"free" ,"minute" ,"strong" ,"special" ,"mind" ,"behind" ,"clear" ,"tail" ,"produce" ,"fact" ,"street" ,"inch" ,"multiply" ,"nothing" ,"course" ,"stay" ,"wheel" ,"full" ,"force" ,"blue" ,"object" ,"decide" ,"surface" ,"deep" ,"moon" ,"island" ,"foot" ,"system" ,"busy" ,"test" ,"record" ,"boat" ,"common" ,"gold" ,"possible" ,"plane" ,"stead" ,"dry" ,"wonder" ,"laugh" ,"thousand" ,"ago" ,"ran" ,"check" ,"game" ,"shape" ,"equate" ,"hot" ,"miss" ,"brought" ,"heat" ,"snow" ,"tire" ,"bring" ,"yes" ,"distant" ,"fill" ,"east" ,"paint" ,"language" ,"among" ,"grand" ,"ball" ,"yet" ,"wave" ,"drop" ,"heart" ,"am" ,"present" ,"heavy" ,"dance" ,"engine" ,"position" ,"arm" ,"wide" ,"sail" ,"material" ,"size" ,"vary" ,"settle" ,"speak" ,"weight" ,"general" ,"ice" ,"matter" ,"circle" ,"pair" ,"include" ,"divide" ,"syllable" ,"felt" ,"perhaps" ,"pick" ,"sudden" ,"count" ,"square" ,"reason" ,"length" ,"represent" ,"art" ,"subject" ,"region" ,"energy" ,"hunt" ,"probable" ,"bed" ,"brother" ,"egg" ,"ride" ,"cell" ,"believe" ,"fraction" ,"forest" ,"sit" ,"race" ,"window" ,"store" ,"summer" ,"train" ,"sleep" ,"prove" ,"lone" ,"leg" ,"exercise" ,"wall" ,"catch" ,"mount" ,"wish" ,"sky" ,"board" ,"joy" ,"winter" ,"sat" ,"written" ,"wild" ,"instrument" ,"kept" ,"glass" ,"grass" ,"cow" ,"job" ,"edge" ,"sign" ,"visit" ,"past" ,"soft" ,"fun" ,"bright" ,"gas" ,"weather" ,"month" ,"million" ,"bear" ,"finish" ,"happy" ,"hope" ,"flower" ,"clothe" ,"strange" ,"gone" ,"jump" ,"baby" ,"eight" ,"village" ,"meet" ,"root" ,"buy" ,"raise" ,"solve" ,"metal" ,"whether" ,"push" ,"seven" ,"paragraph" ,"third" ,"shall" ,"held" ,"hair" ,"describe" ,"cook" ,"floor" ,"either" ,"result" ,"burn" ,"hill" ,"safe" ,"cat" ,"century" ,"consider" ,"type" ,"law" ,"bit" ,"coast" ,"copy" ,"phrase" ,"silent" ,"tall" ,"sand" ,"soil" ,"roll" ,"temperature" ,"finger" ,"industry" ,"value" ,"fight" ,"lie" ,"beat" ,"excite" ,"natural" ,"view" ,"sense" ,"ear" ,"else" ,"quite" ,"broke" ,"case" ,"middle" ,"kill" ,"son" ,"lake" ,"moment" ,"scale" ,"loud" ,"spring" ,"observe" ,"child" ,"straight" ,"consonant" ,"nation" ,"dictionary" ,"milk" ,"speed" ,"method" ,"organ" ,"pay" ,"age" ,"section" ,"dress" ,"cloud" ,"surprise" ,"quiet" ,"stone" ,"tiny" ,"climb" ,"cool" ,"design" ,"poor" ,"lot" ,"experiment" ,"bottom" ,"key" ,"iron" ,"single" ,"stick" ,"flat" ,"twenty" ,"skin" ,"smile" ,"crease" ,"hole" ,"trade" ,"melody" ,"trip" ,"office" ,"receive" ,"row" ,"mouth" ,"exact" ,"symbol" ,"die" ,"least" ,"trouble" ,"shout" ,"except" ,"wrote" ,"seed" ,"tone" ,"join" ,"suggest" ,"clean" ,"break" ,"lady" ,"yard" ,"rise" ,"bad" ,"blow" ,"oil" ,"blood" ,"touch" ,"grew" ,"cent" ,"mix" ,"team" ,"wire" ,"cost" ,"lost" ,"brown" ,"wear" ,"garden" ,"equal" ,"sent" ,"choose" ,"fell" ,"fit" ,"flow" ,"fair" ,"bank" ,"collect" ,"save" ,"control" ,"decimal" ,"gentle" ,"woman" ,"captain" ,"practice" ,"separate" ,"difficult" ,"doctor" ,"please" ,"protect" ,"noon" ,"whose" ,"locate" ,"ring" ,"character" ,"insect" ,"caught" ,"period" ,"indicate" ,"radio" ,"spoke" ,"atom" ,"human" ,"history" ,"effect" ,"electric" ,"expect" ,"crop" ,"modern" ,"element" ,"hit" ,"student" ,"corner" ,"party" ,"supply" ,"bone" ,"rail" ,"imagine" ,"provide" ,"agree" ,"thus" ,"capital" ,"won't" ,"chair" ,"danger" ,"fruit" ,"rich" ,"thick" ,"soldier" ,"process" ,"operate" ,"guess" ,"necessary" ,"sharp" ,"wing" ,"create" ,"neighbor" ,"wash" ,"bat" ,"rather" ,"crowd" ,"corn" ,"compare" ,"poem" ,"string" ,"bell" ,"depend" ,"meat" ,"rub" ,"tube" ,"famous" ,"dollar" ,"stream" ,"fear" ,"sight" ,"thin" ,"triangle" ,"planet" ,"hurry" ,"chief" ,"colony" ,"clock" ,"mine" ,"tie" ,"enter" ,"major" ,"fresh" ,"search" ,"send" ,"yellow" ,"gun" ,"allow" ,"print" ,"dead" ,"spot" ,"desert" ,"suit" ,"current" ,"lift" ,"rose" ,"continue" ,"block" ,"chart" ,"hat" ,"sell" ,"success" ,"company" ,"subtract" ,"event" ,"particular" ,"deal" ,"swim" ,"term" ,"opposite" ,"wife" ,"shoe" ,"shoulder" ,"spread" ,"arrange" ,"camp" ,"invent" ,"cotton" ,"born" ,"determine" ,"quart" ,"nine" ,"truck" ,"noise" ,"level" ,"chance" ,"gather" ,"shop" ,"stretch" ,"throw" ,"shine" ,"property" ,"column" ,"molecule" ,"select" ,"wrong" ,"gray" ,"repeat" ,"require" ,"broad" ,"prepare" ,"salt" ,"nose" ,"plural" ,"anger" ,"claim" ,"continent" ,"oxygen" ,"sugar" ,"death" ,"pretty" ,"skill" ,"women" ,"season" ,"solution" ,"magnet" ,"silver" ,"thank" ,"branch" ,"match" ,"suffix" ,"especially" ,"fig" ,"afraid" ,"huge" ,"sister" ,"steel" ,"discuss" ,"forward" ,"similar" ,"guide" ,"experience" ,"score" ,"apple" ,"bought" ,"led" ,"pitch" ,"coat" ,"mass" ,"card" ,"band" ,"rope" ,"slip" ,"win" ,"dream" ,"evening" ,"condition" ,"feed" ,"tool" ,"total" ,"basic" ,"smell" ,"valley" ,"nor" ,"double" ,"seat" ,"arrive" ,"master" ,"track" ,"parent" ,"shore" ,"division" ,"sheet" ,"substance" ,"favor" ,"connect" ,"post" ,"spend" ,"chord" ,"fat" ,"glad" ,"original" ,"share" ,"station" ,"dad" ,"bread" ,"charge" ,"proper" ,"bar" ,"offer" ,"segment" ,"slave" ,"duck" ,"instant" ,"market" ,"degree" ,"populate" ,"chick" ,"dear" ,"enemy" ,"reply" ,"drink" ,"occur" ,"support" ,"speech" ,"nature" ,"range" ,"steam" ,"motion" ,"path" ,"liquid" ,"log" ,"meant" ,"quotient" ,"teeth" ,"shell" ,"neck"];
  
  var check=true;
  function generate(){
    var text="";
    for(let i=0;i<70;i++){
      const randomIndex = Math.floor(Math.random() * 1000);
      if(i==0){
        text=text+words[randomIndex];
      }else{
        text=text+" "+words[randomIndex];
      }
      
  }
  setRandomText(text);
  setCurrentWordLength(0);
  setLastAcc(0);
  }
  useEffect(() => {
    generate();
  }, []);
  const [state,setState]=useState({
    options: {
      fontFamily: 'Zilla Slab, serif',
      foreColor: '#FFFFFF',
      colors:["#FFEA20","#45FFCA"],
      chart: {
        id: "basic-bar",
        foreColor: '#FFFFFF'
      },title:{
        color:"#FFFFFF"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
        color:"#FFFFFF"
      }, yaxis: {
        labels: {
          formatter: function (value) {
            return Math.round(value); // Round the value to the nearest integer
          },
        },
      }
    },
    series: [
      {
        name: "Wpm",
        data: [30, 40, 45, 50, 49, 60, 70, 91,30, 40, 45, 50, 49, 60, 70, 91,30, 40, 45, 50, 49, 60, 70, 91,30, 40, 45, 50, 49, 60]
      },{
        name: "Acc",
        data: [60, 45, 54, 52, 32, 10, 78, 98,60, 45, 54, 52, 32, 10, 78, 98,60, 45, 54, 52, 32, 10, 78, 98,60, 45, 54, 52, 32, 10]
      }
    ]});
  const [charIndex, setCharIndex] = useState(0);
  const [wrongIndexes, setWrongIndexes] = useState([]);

  function callback() {
    setCurrentTime(finalTime);
    setRunningState(false);
    var para=document.getElementById('para');
    para.style.display="none";
    var chart=document.getElementsByClassName('chart');
    var stats=document.getElementsByClassName('stats');
    var time=document.getElementsByClassName('time');
    time[0].style.display="none";
    chart[0].style.display="flex";
    stats[0].style.display="flex";
    setIsActive(false);
    setTimerWidth(0);
  }
  
  const [isActive, setIsActive] = useState(false);
  const [lastAcc,setLastAcc]=useState(0);
  const [currWordLength,setCurrentWordLength]=useState(0);


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (runningState && randomText.length>0) {
        setCurrentLength(currLenght+1);
        setFinalTIme(finalTime);
        if(startTimer){const timer = setTimeout(callback, finalTime*1000);
          setTimerWidth(finalTime);
          setTimerId(timer);
          setIsActive(true);
          setStartTimer(false);
          var chart=document.getElementsByClassName('chart');
          var stats=document.getElementsByClassName('stats');
          var timeProgress=document.getElementsByClassName('current-time');
          var finalTimee=document.getElementsByClassName('final-time');
          finalTimee[0].style.width="100%";
          timeProgress[0].style.width="100%";
          chart[0].style.display="none";
          stats[0].style.display="none";

        }
        if(event.key === 'Backspace'){
          setCharIndex(charIndex-1);
          
        }
        if (event.key === " " || event.keyCode === 32) {
        if(lastAcc!=0 && currWordLength!=0 && (lastAcc/currWordLength)*100>=90){setWpm(wpm+1);}
          console.log(wpm);
          setCurrentWordLength(0);
          setLastAcc(0);
        }else{
          setCurrentWordLength(currWordLength+1);
        }
        if(event.key==randomText.charAt(charIndex)){
          setLastAcc(lastAcc+1);
          const nextCharIndex = charIndex + 1;
          setAccuracy(accuracy+1);
          setCharIndex(nextCharIndex);
        }
        else{
          setWrongIndexes([...wrongIndexes, charIndex]);
          setCharIndex(charIndex+1);
        }
        if(charIndex==randomText.length-1){
          generate();
          setCharIndex(0);
          setWrongIndexes([]);
          console.log("last index");
        }
      }else{
        setRunningState(false);
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      
    };
  }, [finalTime,charIndex, randomText,wpm,accuracy]);


  const resetData=()=>{
    setAccuracy(0);
    setWpm(0);
    setCharIndex(0);
    setRunningState(true);
    setStartTimer(true);
    setWrongIndexes([]);
    generate();
    var para=document.getElementById('para');
    para.style.display="inline";
    var chart=document.getElementsByClassName('chart');
    var stats=document.getElementsByClassName('stats');
    var time=document.getElementsByClassName('time');
    var timeProgress=document.getElementsByClassName('current-time');
    var finalTime=document.getElementsByClassName('final-time');
    finalTime[0].style.width="0%";
    timeProgress[0].style.width="0%";
    time[0].style.display="inline";
    chart[0].style.display="none";
    stats[0].style.display="none";
    setCurrentTime(0);
    setIsActive(false);
    setStoreAccuracy([]);
    setStoreWpm([]);
    clearInterval(timerId);
    setTimerId(0);
    setCurrentLength(0);
    // setFinalTIme(0);
    setTimerWidth(0);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Backspace') {
        const nextCharIndex = charIndex -1;
        if(wrongIndexes.includes(nextCharIndex)){
          wrongIndexes.pop();
        }
        setCharIndex(nextCharIndex);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [charIndex, randomText]);




  useEffect(()=>{
    let timer;
    if(isActive && currentTime<=finalTime){
      const temp=Math.floor(wpm*60/currentTime);
      if(temp>=0 && !isNaN(temp) && currentTime>0 && storeWpm.length<finalTime) {setStoreWpm([...storeWpm,temp])};
      if(storeAccuracy.length<finalTime) setStoreAccuracy([...storeAccuracy,Math.floor(accuracy/currLenght*100)]);
      console.log(temp+"  "+accuracy);
      timer=setInterval(()=>{
        setCurrentTime((prevTime)=>prevTime+1)
      },1000);
    }
    if(currentTime==finalTime){
      const temp=storeWpm[storeWpm.length-1];
      storeWpm.push(temp);
      console.log(currentTime+"     currentTime");
      setIsActive(false);
      clearInterval(timer);
    }
    return ()=>{
      clearInterval(timer);
    }
  },[isActive,currentTime]);


  const textStyle = {
    color: "#45FFCA", 
    fontSize: "4rem",
    width:"200px",
  };

  var inputBox=document.getElementsByClassName('input-box');

  const getColorForIndex = (index) => {
    if(wrongIndexes.includes(index)){
      return '#FFEA20';
    }
    if (index === charIndex) {
      return 'white';
    } else if (index < charIndex) {
      return '#45FFCA';
    } else {
      return '#616161';
    }
  };

  useEffect(()=>{
    const fifteen = document.getElementById('fifteen');
    const thirty = document.getElementById('thirty');
    const sixty = document.getElementById('sixty');
    if(finalTime==30){
      thirty.style.backgroundColor='#535353';
      thirty.style.color='#45FFCA';
      sixty.style.backgroundColor='#181D25';
      sixty.style.color='grey';
      fifteen.style.backgroundColor='#181D25';
      fifteen.style.color='grey';
    }else if(finalTime==60){
      sixty.style.backgroundColor='#535353';
      sixty.style.color='#45FFCA';
      thirty.style.backgroundColor='#181D25';
      thirty.style.color='grey';
      fifteen.style.backgroundColor='#181D25';
      fifteen.style.color='grey';
    }else{
      fifteen.style.backgroundColor='#535353';
      fifteen.style.color='#45FFCA';
      sixty.style.backgroundColor='#181D25';
      sixty.style.color='grey';
      thirty.style.backgroundColor='#181D25';
      thirty.style.color='grey';
    }
  },[finalTime]);

  const [timerWidth,setTimerWidth]=useState(0);
  const [chartData,setChartData]=useState([]);

  const underline=(color)=>{
    if(color=='white'){
      return 'underline';
    }else{
      return 'none'
    }
  }
  return (
    <div className="main">
      <div className='loop'><Lottie loop={false} animationData={reset} onClick={resetData}/></div>
      <div className="reset">
        <div className="CurrentTime" style={{textStyle}}><span style={{fontSize:"1rem",color:'grey'}}>Time: </span>{currentTime}<span style={{fontSize:"1rem",color:'grey'}}>Sec</span> </div>
          <div className="rectangle">
          <div className="set-time" style={{color:'grey',fontSize:'0.8rem'}}>Set time:</div> 
            <div className="input-box">
              <div id="fifteen" onClick={()=>{if(!isActive){setFinalTIme(15)}}}>15s</div>
              <div id="thirty" onClick={()=>{if(!isActive){setFinalTIme(30)}}}>30s</div>
              <div id="sixty" onClick={()=>{if(!isActive){setFinalTIme(60)}}}>60s</div>
            </div>
          </div>
        </div>
        <p id='para'>
        {randomText.split('').map((char, index) => (
          <span key={index} style={{ color: getColorForIndex(index), textDecoration:underline(getColorForIndex(index)),textUnderlineOffset:'5px'}}>
            {char}
          </span>
        ))}
      </p>
      <div className="time">
        <div className="final-time" style={{ width:"0%"} }></div>
        <div className="current-time" style={{ width:"0%",transition:`width ${timerWidth}s`} }></div>
      </div>
      <div className="chart" style={{display:"none"}}>
        <Chart className="mychart"
                options={state.options}
                series={
                  [
                    {name:'Wpm',
                    data:storeWpm
                  },{
                    name:'Acc',
                    data:storeAccuracy
                  }
                  ]
                }
                type="area"
                height={300}
              />
      </div>
      <div className="stats" style={{display:"none"}}>
          <div className="wpm">{wpm*60/finalTime} <span style={{fontSize:"3rem"}}>WPM</span> </div>
          <div className="acc">{Math.floor(accuracy/currLenght*100)}%<span style={{fontSize:"3rem"}}>Acc</span></div>
        </div>
    </div>
  );
}

export default TypeContainer;
