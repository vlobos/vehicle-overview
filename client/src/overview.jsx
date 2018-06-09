import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Popup from 'reactjs-popup'

class Overview extends React.Component {
  constructor () {
    super()
    this.state = {
      details: {},
      features: [],
      mileage: '',
      price: '',
      expanded: false,
    }

  }

  addComma (miles, cost) {
    let mileage = miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let price = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    this.setState({
      mileage: mileage,
      price: price
    })
  }

  componentDidMount () {
    axios
      .get('/api/vehicles/2')
      .then(data => {
        let feats = [];
        let featureList = data.data[0].vehicle_features;
        featureList.forEach((feat) => {
          feats.push(feat.feature.feature)
        })
        this.setState({
          details: data.data[0],
          features: feats
        })
      })
      .then(() => {
        console.log(this.state.details, 'Successfully getting all data', this.state.features, 'Features')
        this.addComma.call(this, this.state.details.mileage, this.state.details.price)
      })

      .catch(err => {
        console.log('There was an error is your axios', err)
      });

  }

  expandComment() {
    if (this.state.expanded) {
      this.setState({
        expanded: false
      })
    } else {
      this.setState({
        expanded: true
      })
    }
    console.log("hey dash")
  }


  render () {
    let expanded = this.state.expanded;

    let details = this.state.details;

    let features = this.state.features;

    let miles = this.state.mileage;

    let price = this.state.price;

    const OverviewContainer = styled.div`
      width: 600px;
      margin-left: 110px;
      padding-top: 14px;
      padding-bottom: 14px;
      padding-left: 21px;
      padding-right: 21px;


      font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 12px;
      line-height: 1.5;
      color: #333;
      background-color: #fff;
    `
    const TopBox = styled.div`
    margin-bottom: 15px;
    `

    const Row = styled.div`
    display: inline-block;
    width: 100%;
    margin-left: -7px;
    margin-right: -7px;
    padding-right: 7px;
    padding-left: 7px;
    `

    const RowImage = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 100px;
    margin-left: 20px;
    margin-right: -7px;
    padding-right: 7px;
    padding-left: 7px;
    `

    const InnerColumn = styled.div`
    width: 50%;
    float: left;
    `

    const SmallColumn = styled.div`
    width: auto;
    float: left;
    padding: 2px;
    `

    const ExteriorColor = styled.div`
    background: ${this.state.details.ext_color_swatch};
    float: left;
    height: 15px;
    width: 30px;
    border: 1px solid gray;
  `
    const InteriorColor = styled.div`
    background: ${this.state.details.int_color_swatch};
    float: left;
    height: 15px;
    width: 30px;
    border: 1px solid gray;
  `
    const ColumnContainer = styled.div`
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    box-sizing: border-box;
    display: block;
    `
    const Table = styled.table`
    border-collapse: collapse;
    border-top: 1px solid #e6e6e6;
    width: 100%;
    margin-bottom: 10px;
    `

    const RowBottom = styled.tr`
    border-bottom: 1px solid #e6e6e6;
    height: 30px;
    `
    const Td = styled.td`
    padding: 7px;
    color: gray;
    `

    const SmallTextP = styled.p`
    font-size: 10px;
    margin-top: 0px;
    `
    const RecallButton = styled.a`
      font-weight: normal;
      color: #505fbb;
      background-color: #fff;
      border-color: #c2c2c2;
      box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
      display: inline-block;
      margin-bottom: 0;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      border: 1px solid #c2c2c2;
      white-space: nowrap;
      padding: 7px 14px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3.5px;
      user-select: none;
      text-decoration: none;
    `

    const SingleRow = styled.div`
    border-top: 1px solid #e6e6e6;
    `
    const PriceText = styled.span`
    font-size: 16px;
    `

    const Component = styled.div`
    margin-top: 35px;
    margitn-bottom: 15px;
    `

    const WTd = styled.td`
    text-align: right;
    `

    const HeaderWarranty = styled.h2`
    font-size: 14px;
    `

    const DivKelleyText = styled.div`
    text-align: center;
    padding: 5px;
    `

    const KelleyLink = styled.a`
    text-decoration: none;
    text-align: center;
    `

    const ThreeColumns = styled.div`
    margin-top: 0px;
    column-count: 3;
    padding-top: 0px;
    padding-bottom: 14px;
    `
    const List = styled.ul`
    margin-top: 0px;
    margin-bottom: 10.5px;
    display: block;
    list-style-type: disc;
    `

    const FeaturesSpan = styled.a`
    cursor: pointer;
    text-decorator: none;
    font-weight: normal;
    color: #505fbb;
    `

    
    const ModalHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    font-size: 12px;
    text-align: left;
    padding: 0px;
    `
    const ModalSpan = styled.div`
    padding: 10px;
    `
    const ModalContent = styled.div`
    padding-top: 30px;
    `

    const Comment = styled.div`
    max-height: ${expanded ? 'auto' : '50px' };
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    color: linear-gradient(to bottom, white, transparent)
    `

    const SeeMoreLink = styled.div`
    text-align: center;
    `

    const SeeMore = styled.span`
    margin-top: 14px;
    margin-bottom: 14px;
    text-align: center;
    cursor: pointer;
    color: #505fbb;
    &:hover {
      text-decoration: underline;
  };
    `

    const DisclaimerP = styled.p`
    margin-top: 0px;
    `

    const TopTab = styled.div`
    display: inline-block;
    width: 100%;
    margin-left: -7px;
    margin-right: -7px;
    padding-right: 7px;
    padding-left: 7px;
    margin-bottom: 15px;
    `

    const Tab = styled.div`
    padding-left: 15px;
    padding-right: 15px
    padding-top: 7px;
    padding-bottom: 7px;
    text-align: center;
    color: gray;
    border-top: 1px solid #e6e6e6; 
    border-right: 1px solid #e6e6e6; 
    border-left: 1px solid #e6e6e6; 
    border-radius: 3px
    width: 16%;
    float: left;
    `

    const SideTab = styled.div`
    float: right;
    width: 78.6%;
    border-bottom: 1px solid #e6e6e6;
    height: 32px
    `

    return (
      <OverviewContainer>
        <TopTab>
            <Tab>Vehicle Overview</Tab>
          <SideTab/>
        </TopTab>
        <TopBox>
          {/* ---- COLORS TOP ROW  ---- */}
          <Row>
            <div>
              <InnerColumn>
                <InnerColumn>
                  <SmallColumn>
                    <ExteriorColor />
                  </SmallColumn>
                  <SmallColumn>
                  <div className='color-name'>
                    <div>Exterior:</div>
                    <div className='exterior-color-name'>
                      <strong>{details.ext_color}</strong>
                    </div>
                  </div>
                  </SmallColumn>
                </InnerColumn>
                <InnerColumn>
                  <SmallColumn>
                    <InteriorColor />
                  </SmallColumn>
                  <SmallColumn>
                  <div className='color-name'>
                    <div>Interior:</div>
                    <div className='exterior-color-name'>
                      <strong>{details.int_color}</strong>
                    </div>
                  </div>
                  </SmallColumn>
                </InnerColumn>
              </InnerColumn>
              <InnerColumn>
                <div className='image'>
                  <img src='carfaximage.gif' />
                </div>
                <div className='carfax-text'>
                  <div>Carfax</div>
                </div>
              </InnerColumn>
            </div>
          </Row>

          <br />

          {/* ---- DETAILS TABLE ---- */}

          <Row>
            <ColumnContainer>
              <Table>
                <tbody>
                  <RowBottom>
                    <Td>Mileage</Td>
                    <td>{this.state.mileage}</td>
                  </RowBottom>
                  <RowBottom>
                    <Td>Body Style</Td>
                    <td>{details.body_style}</td>
                  </RowBottom>
                  <RowBottom>
                    <Td>Drive Type</Td>
                    <td>{details.drive_type}</td>
                  </RowBottom>
                  <RowBottom>
                    <Td>Engine</Td>
                    <td>{details.engine}</td>
                  </RowBottom>
                  <tr>
                    <Td>Transmission</Td>
                    <td>{details.transmission}</td>
                  </tr>
                </tbody>
              </Table>
            </ColumnContainer>
            <ColumnContainer>
              <Table>
                <tbody>
                  <RowBottom>
                    <Td>Fuel</Td>
                    <td>{details.fuel}</td>
                  </RowBottom>
                  <RowBottom>
                    <Td>MPG</Td>
                    <td>{details.mpg}</td>
                  </RowBottom>
                  <RowBottom>
                    <Td>Stock #</Td>
                    <td>{details.stock_num}</td>
                  </RowBottom>
                  <RowBottom>
                    <Td>VIN</Td>
                    <td>{details.vin}</td>
                  </RowBottom>
                  <tr>
                    <Td>ATC Car ID</Td>
                    <td>{details.atc_car_id}</td>
                  </tr>
                </tbody>
              </Table>
            </ColumnContainer>
          </Row>
          <br />

          {/* ---- SAFETY RECALL BOX  ---- */}

          <div className='safety-recall'>
            <strong>Safety Recall Information</strong>
            <SmallTextP>
              Some vehicles may be subject to manufacturer safety recalls. See if there are any open safety recalls for this vehicle. This does not include non-safety recalls. Recently announced safety recalls may not yet be posted and there may be a delay between the time a repair is made and before it is reported or posted to the website. Before purchasing, be sure to ask the dealer for an up-to-date status on any recalls.
            </SmallTextP>
            <RecallButton
              href='https://www.nhtsa.gov/recalls?vin=${details.vin}'
              target='blank'
            >
              Check Safety Recall Status
            </RecallButton>
          </div>
        </TopBox>
        <br />

        <SingleRow />

        {/* ---- KELLEY BB CONTAINER ---- */}
        <Component>
          <h2>Kelley Blue Book® Fair Market Range</h2>
          <div>
            <div className='row'>
              <p>
                Autotrader is displaying the Kelley Blue Book® Price Advisor to help shoppers better understand vehicle pricing.
              </p>
            </div>
            <Row>
              <span>Dealer Asking Price: </span>
              <PriceText><strong>${price}</strong></PriceText>
            </Row>
            <RowImage>
              <InnerColumn>
                <img src='kelleybbimg.png' />
                <DivKelleyText>
                  Kelley Blue Book info valid for ZIP Code 90045 through 06/07/2018
                </DivKelleyText>
                <DivKelleyText>
                  <KelleyLink href='https://www.kbb.com/company/privacy-policy/'>
                    Kelley Blue Book Policy
                  </KelleyLink>
                </DivKelleyText>
              </InnerColumn>
            </RowImage>
          </div>
        </Component>

        <br />

        <SingleRow />

        <Component>
          <h2>Features</h2>

          <ThreeColumns>
            <List>
            { features.map((feature, i) => {
              while (i < 10) {
                return <li>{feature}</li>
              }
            })}
            </List>
          </ThreeColumns>

          <Popup
            trigger={<FeaturesSpan> View all features </FeaturesSpan>}
            modal
            closeOnDocumentClick
          >
          <div>
            <ModalHeader>
              <ModalSpan>Features</ModalSpan>
            </ModalHeader>
            <ModalContent>
              <ThreeColumns>
                <List>
                  {features.map((feature) => {
                    return <li>{feature}</li>
                  })}
                </List>
              </ThreeColumns>
            </ModalContent>
          </div>
          </Popup>

        </Component>
        <br />

        <SingleRow />

        <Component>
          <h2>Seller Comments</h2>
          <Comment>
            {details.seller_comments}
          </Comment>
          <SeeMoreLink onClick={this.expandComment.bind(this)}>
            {this.state.expanded ? (<SeeMore> Show Less </SeeMore>) : 
            (<SeeMore> Show More ˅ </SeeMore>)}
          </SeeMoreLink>
          <br />
          <div>
            <strong>Disclaimer</strong>
            <DisclaimerP>
              Price excludes government fees and taxes, any finance charges, any dealer document preparation charge, and any emission testing charge.
            </DisclaimerP>
          </div>
        </Component>
        <br />

        <SingleRow />

        <Component>
          <h2>Warranty</h2>
          <HeaderWarranty>Original Warranty</HeaderWarranty>
          <Table>
            <tbody>
              <RowBottom>
                <Td>Basic</Td>
                <WTd>{details.basic_warranty}</WTd>
              </RowBottom>
              <RowBottom>
                <Td>Drivetrain</Td>
                <WTd>{details.drivetrain}</WTd>
              </RowBottom>
              <RowBottom>
                <Td>Corrosion</Td>
                <WTd>{details.corrosion}</WTd>
              </RowBottom>
              <RowBottom>
                <Td>Roadside Assistance</Td>
                <WTd>{details.roadside_assistance}</WTd>
              </RowBottom>
            </tbody>
          </Table>
        </Component>
      </OverviewContainer>
    )
  }
}

export default Overview
