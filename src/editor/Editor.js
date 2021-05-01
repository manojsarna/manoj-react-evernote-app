import React from 'react';
import ReactQuill from 'react-quill'
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import './Style.css'
import screenfull from 'screenfull';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

class EditorComponent extends React.Component{
    constructor(){
        super();
        this.state={
            text: '',
            title: '',
            id: ''
        };
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
        if (screenfull.isEnabled){
            screenfull.on('change', () => {
                console.log("Fullscreen?", screenfull.isFullscreen? 'Yes' : 'No');
            })
        }
    }
    // It is called when quill needs to be displayed when selected (life cycle hook)

    componentDidUpdate = () => {
        if(this.props.selectedNote.id !== this.state.id) {
            this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
        }
    }

    render(){

        return(
            <div className="editorContainer">
            <BorderColorIcon className='editIcon'/>
            <input 
                className='titleInput'
                placeholder="Note Title..."
                value={this.state.title ? this.state.title : ''}
                onChange={(e) => this.updateTitle(e.target.value)}
                />
                <FullscreenIcon className="expandIcon" onClick={this.toggleFullScreen}/>
                <ReactQuill 
                    value={this.state.text} 
                    onChange={this.updateBody}>
                </ReactQuill>
            </div>
        )
    }
    updateBody = async (val) => {
        await this.setState({text: val});
        this.update()
    }
    updateTitle = async (txt) => {
        await this.setState({ title: txt });
        this.update()
    }
    update = debounce(()=>{
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500);
    toggleFullScreen = () => {
        if (screenfull.isEnabled){
            screenfull.toggle();
        }
    }
}

export default EditorComponent