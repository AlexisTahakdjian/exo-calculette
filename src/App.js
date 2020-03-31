import React from 'react';
import './App.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: '',
            decimal: false,
            operator: false,
        }
    }

    chiffre = (num) => {
        this.setState({
                result: this.state.result + num,
                operator: false
            }
        )
    }

    supprAll = () => {
        this.setState({
                result: '',
                operator: false,
                decimal: false
            }
        )
    }

    operation = (op) =>{
        if(!this.state.operator){
            this.setState({
                    result: this.state.result + op,
                    operator: true,
                    decimal: false
                }
            )
        }
    }

    point = () => {
        if(!this.state.decimal){
            this.setState({
                    result: this.state.result + '.',
                    decimal: true
                }
            )
        }
    }

    egal = () => {
        const reslutat = eval(this.state.result)
        this.setState({
                result: reslutat,
                operator: false,
                decimal: false
            }
        )
    }

    carre = () => {
        const foisDeux = this.state.result * this.state.result;
        this.setState({
                result: foisDeux,
                operator: false,
                decimal: false
            }
        )
    }

    racineCarre = () => {
        const sqrt = Math.sqrt(this.state.result);
        this.setState({
                result: sqrt,
                operator: false,
                decimal: false
            }
        )
    }

    suppr = () => {
        const result = this.state.result;
        const supprimer = result.slice(0, -1);
        this.setState({
            result: supprimer
        })
    }

    render() {
        return (
            <div className="App">
                <div className="block">
                    <input type="text" value={this.state.result} className="moniteur" readOnly/>
                    <div className="ligne">
                        <button onClick={this.suppr} className="button">C</button>
                        <button onClick={this.racineCarre} className="button">√</button>
                        <button onClick={this.carre} className="button">²</button>
                        <button onClick={this.supprAll} className="button">CE</button>
                    </div>
                    <div className="ligne">
                        <button onClick={(num) => this.chiffre(7)} className="button">7</button>
                        <button onClick={(num) => this.chiffre(8)} className="button">8</button>
                        <button onClick={(num) => this.chiffre(9)} className="button">9</button>
                        <button onClick={(op) => this.operation('/')} className="button">÷</button>
                    </div>
                    <div className="ligne">
                        <button onClick={(num) => this.chiffre(4)} className="button">4</button>
                        <button onClick={(num) => this.chiffre(5)} className="button">5</button>
                        <button onClick={(num) => this.chiffre(6)} className="button">6</button>
                        <button onClick={(op) => this.operation('*')} className="button">x</button>
                    </div>
                    <div className="ligne">
                        <button onClick={(num) => this.chiffre(1)} className="button">1</button>
                        <button onClick={(num) => this.chiffre(2)} className="button">2</button>
                        <button onClick={(num) => this.chiffre(3)} className="button">3</button>
                        <button onClick={(op) => this.operation('-')} className="button">-</button>
                    </div>
                    <div className="ligne">
                        <button onClick={(num) => this.chiffre(0)} className="button">0</button>
                        <button onClick={this.point} className="button">.</button>
                        <button onClick={this.egal} className="button">=</button>
                        <button onClick={(op) => this.operation('+')} className="button">+</button>
                    </div>
                </div>
            </div>
        );
    }


}


