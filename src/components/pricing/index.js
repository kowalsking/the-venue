import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Включая три проекта полной практики, целевую страницу, проект Firebase и полный стек с Mongodb и Node. Вы хотите практиковать свой код React или просто изучить его, создав веб-страницы? Это курс для вас.',
            'Большинство курсов обучают вас основам и дают вам приложение todo, а я хотел создать что-то другое. Мы создадим три реальных проекта, чтобы вы могли практиковаться в более реальной среде.',
            'Если вы ничего не знаете об React, не волнуйтесь, я добавил раздел бонуса с крошечным курсом React, чтобы вы могли понять основы. Это курс для вас.Это курс для вас.Это курс для вас.'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]
    }


    showBoxes = () => (
        this.state.prices.map( (box, i) => (
            <Zoom
                key={i}
                delay={this.state.delay[i]}
            >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))

    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;