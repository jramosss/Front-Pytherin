import React from 'react';
import '../custom.css';
import { sendRequest } from '../services/request';
import { userContext } from '../user-context';
import { Vote } from './Vote';
import { Dashboard } from './Dashboard';
import { Minister } from './Minister';
import { RoleCharacter } from './RoleCharacter';
import { Director } from './Director';
import { PlayersList } from './PlayersList';
//import { Discard } from './Discard';
import { Redirect } from 'react-router-dom';

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            room_name : this.props.room_name,
            players : ['asdasd','asdsad2', 'asdasd3'],
            proclam_de: 0,
            proclam_op: 0,
            myRole: 'asdasd',
            myChar: 'asjdjasd',
            cards_disdard: [],
            curr_minister: 'naza trolo',
            curr_director : 'elnuevo',
            timer: null
        }
        
    }
    static contextType = userContext;
    // uncomment when the endpoint is done.
    /*componentDidMount(){
        const headers = {
            Accept: "application/json",
            Authorization: "Bearer " + this.context.token,
            "Content-Type": "application/json"
        }
        try {
            // path for getting the game state.
            const path = "http://127.0.0.1:8000/" + this.state.room_name.toString() +"/game_state"
            const timerId = setInterval(sendRequest('GET', headers, {}, path).then(response => {
                if(!response.ok){ 
                    alert ("Error al obtener datos de la partida.")
                }else{
                    console.log("Accediendo al endpoint de la partida perrix")
                }
            }), 3000);
            this.setState({timer: timerId})
        }catch(e){
            alert("Error al obtener datos de la partida.")
        }
    }
    componentWillUnmount(){
        clearInterval(this.state.timer);
    }*/
    render(){
        return(
            // uncomment once its connected with endpoints
            /*<userContext.Consumer>
            {({ token }) => (
              token ? */
            <div class="game-form" id='game-form'>
                <div class="game-container">
                    <h1 class="title">Partida: {this.state.room_name}</h1>
                        <Dashboard proclam_de = {this.state.proclam_de} 
                        proclam_op={this.state.proclam_op} />
                        <div class="columns">
                            <div class="column align-cntr">
                               Vote<br/>
                               <Vote/>
                            </div>
                            <RoleCharacter role={this.state.myRole} charac={ this.state.myChar} />
                            <Minister name={this.state.curr_minister} />
                            <Director name={this.state.curr_director} />
                            <PlayersList players= {this.state.players} />
                        </div>
                        <div class="columns">
                          
                        </div>
                </div>
            </div>
            /*:
            <Redirect to='/'/>
            )}
            </userContext.Consumer>*/
        )
    }


} export { Game }