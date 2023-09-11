import {Component} from 'react'
import {
  LabelElement,
  Heading,
  InputElement,
  GetDataContainer,
  FormElement,
  BtnElement,
  SelectElement,
  MemeContainer,
  TextContent,
  Container,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    isCreate: false,
    backgroundImgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onGenerate = () => {
    this.setState({isCreate: true})
  }

  onChangeUrl = event => {
    this.setState({backgroundImgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  renderMeme = () => {
    const {backgroundImgUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImgUrl}>
        <TextContent activeFontSizeId={fontSize}>{topText}</TextContent>
        <TextContent activeFontSizeId={fontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    const {
      isCreate,
      backgroundImgUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state
    console.log(isCreate)
    return (
      <Container>
        <FormElement>
          <Heading>Meme Generator</Heading>
          <GetDataContainer>
            <LabelElement htmlFor="imgUrl">Image Url</LabelElement>
            <InputElement
              onChange={this.onChangeUrl}
              value={backgroundImgUrl}
              id="imgUrl"
              type="text"
            />
          </GetDataContainer>
          <GetDataContainer>
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              onChange={this.onChangeTopText}
              value={topText}
              id="topText"
              type="text"
            />
          </GetDataContainer>
          <GetDataContainer>
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              onChange={this.onChangeBottomText}
              value={bottomText}
              id="bottomText"
              type="text"
            />
          </GetDataContainer>
          <SelectElement
            onChange={this.onChangeFontSize}
            value={fontSize}
            name="fontSize"
            id="fontSize"
          >
            {fontSizesOptionsList.map(each => (
              <option value={each.optionId}>{each.displayText}</option>
            ))}
          </SelectElement>
          <BtnElement type="button" onClick={this.onGenerate}>
            Generate
          </BtnElement>
        </FormElement>
        <div>{isCreate ? this.renderMeme() : null}</div>
      </Container>
    )
  }
}
export default MemeGenerator
