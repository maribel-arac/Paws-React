import React from 'react';
import FileUploader from 'react-firebase-file-uploader';
import firebase from "../Firebase/firebaseConfig";
 
class UploadPhoto extends React.Component {
    constructor(){
        super();

        this.state = {
            image: " ",
            imageURL: " ",
            progress: 0
        }
    }

    handleUploadStart = () => {
        this.setState({
          progress: 0  
        })
    }

    handleUploadSuccess = fileName => {
        this.setState({
            image: fileName,
            progress: 100
        })

        firebase.storage().ref('lostPets').child(fileName)
            .then(url => this.setState({
                imageURL: url
            }))
    }
 
    
 
    render() {
        // console.log(this.state)
        return (
            <div clasName="container">
            <label>Cargando</label>
                <p>{this.state.progress}</p>
                {this.state.image && <img src= { this.state.imageURL } alt="lost-pet" />}

                <FileUploader 
                accept = "image/*"
                name ='image'
                storageRef = { firebase.storage().ref('lostPets') }
                onUploadStart = { this.handleUploadStart }
                onUploadSuccess = { this.handleUploadSuccess }
                />


            </div>
        );
    }
}


export default UploadPhoto;