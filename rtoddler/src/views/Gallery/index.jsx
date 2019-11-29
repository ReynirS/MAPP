import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';

class Gallery extends React.Component {
  state = {
    boards: data.boards,
    selectedBoards: [],
    isAddModalOpen: false,
  }
  onBoardLongPress(id){
    const { selectedBoards } = this.state;
    if(selectedBoards.indexOf(id) !== -1){
      //The image is already within the list
      this.setState({
        selectedBoards: selectedBoards.filter(board => board !== id)
      });
    }
    else{
      //The image needs to be added
      this.setState({
        selectedBoards: [ ...selectedBoards, id ]
      });
    }
  }
  displayCaption(){
    const { selectedBoards } = this.state;
    if(selectedBoards.length === 0){return;}
    let itemCaption= 'boards';
    if(selectedBoards.length === 1){
      itemCaption = 'board';
    }
    return <Text style={{
      fontWeight: 'bold',
      fontSize: 12,
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 5,
    }}>{selectedBoards.length} {itemCaption} selected</Text>
  }
  takePhoto(){

  }
  selectFromCameraRoll(){

  }
  render() {
    // console.log(this.state.selectedBoards);
    const { selectedBoards, boards, isAddModalOpen } = this.state;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          hasSelectedBoards={ selectedBoards.length > 0 }
          onAdd={ () => this.setState({ isAddModalOpen: true }) }
          onRemove={ () => {} } />
        {this.displayCaption()}
        <BoardList
          boards={boards}
          selectedBoards={selectedBoards}
          onLongPress={(id) => this.onBoardLongPress(id)} />
          <AddModal
            isOpen={ isAddModalOpen }
            closeModal={ () => this.setState({ isAddModalOpen: false }) }
            takePhoto={ () => this.takePhoto() }
            selectFromCameraRoll={ () => this.selectFromCameraRoll() } />
      </View>
    )
  }
}

export default Gallery;
