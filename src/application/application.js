import React from 'react'
import '../application/application.css'
import '../images/application'
import { quapni_app, apple_store, google_play } from '../images/application';

export const Application = () => (
    <div>
        <title>APP介紹 - Quapni</title>
        
        <div className="ui container app-page-style app-clearfix">
            <div className="app-image-size"><img src={quapni_app} /></div>
            <div className="app-intro">
                <div className="app-title"><h1>Quapni Fishing APP</h1></div>
                <br />
                <br />
                <p>
                    我們結合時下最流行的社群平台，<br />
                    戶外釣魚、室內釣蝦 ;<br />
                    整合完備的即時氣象、釣點、<br />
                    釣具選擇、同好群組、店家資訊等，<br />
                    無論你在世界的哪個角落。 <br />
                    <br />
                    <b>Quapni Fishing</b> <br />
                    <b>讓您的作釣生活更有趣、更便利。</b>
                </p>
                <div className="app-google-apple">
                    <img src={google_play} />
                </div>
                <div className="app-google-apple">
                    <img src={apple_store} />
                </div>
            </div>
        </div>
    </div>
)
