import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import {META_DATA} from '../META_DATA.json'
import { border } from '@mui/system';
import { green } from '@mui/material/colors';


const Charter_Party = (Ref_Number) => {

    
    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        background : '#D9D9D9',
        // ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        fontSize : '8px',
        borderRadius : '0px',
        border : '1px solid',
        borderColor : '#000000' 
      }));

      const Item2 = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // background : '#D9D9D9',
        border : '1px solid',
        // ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        fontSize : '8px',
        borderRadius : '0px',
      }));

      const Header = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        backgroundColor : green[600],
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.grey[100],
        fontSize : '12px',
        borderRadius : '0px'
      }));

      const Table_item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // background : '#D9D9D9',
        border : '1px solid',
        // ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'start',
        // color: theme.palette.text.secondary,
        fontSize : '10px',
        borderRadius : '0px',
        height : '100%'
      }));

  return (
    <div className='Charter_Party.css' fontSize = '20px'>
      <Typography fontSize='10px'>
        <strong>Charter Party</strong> Detailed Extraction for Ref No. <strong>Ref_Number</strong>
      </Typography>

      <Grid container spacing={1} marginTop = "10px" >
        <Grid item xs='auto' border="#000000">
            <Item>CP Status</Item>
        </Grid>
        <Grid item xs='auto'>
            <Item>Created On</Item>
        </Grid>
        <Grid item xs='auto'>
            <Item>Created By(Company)</Item>
        </Grid>
        <Grid item xs='auto'>
            <Item>Created By(Fullname)</Item>
        </Grid>
        <Grid item xs='auto'>
            <Item>Source</Item>
        </Grid>
        <Grid item xs='auto'>
            <Item>Format</Item>
        </Grid>
      </Grid>

      <Grid container spacing={1} marginTop = '1px' marginBottom={2}>
        <Grid item xs='auto' border="#000000">
            <Item2>CP Status</Item2>
        </Grid>
        <Grid item xs='auto'>
            <Item2>Created On</Item2>
        </Grid>
        <Grid item xs='auto'>
            <Item2>Created By(Company)</Item2>
        </Grid>
        <Grid item xs='auto'>
            <Item2>Created By(Fullname)</Item2>
        </Grid>
        <Grid item xs='auto'>
            <Item2>Source</Item2>
        </Grid><Grid item xs='auto'>
            <Item2>Format</Item2>
        </Grid>
      </Grid>

      <Box 
    //   sx = {{border : 1,borderColor : '#000000'}}
        sx ={{marginBottom : 4}}
      >
      <Grid container spacing={0} marginTop = '1px'>
        <Grid item xs={4} border="#000000">
            <Header>CP Status</Header>
        </Grid>
        <Grid item xs={4}>
            <Header>Created On</Header>
        </Grid>
        <Grid item xs={4}>
            <Header>Created By(Company)</Header>
        </Grid>

        <Grid container spacing={0}>
            <Grid item xs={4}>
                <Table_item>
                The  vessel  shall  be  employed  in  carrying  lawful  merchandise  excluding  any  goods  of  a  dangerous,        injurious, flammable or        corrosive nature unless carried in accordance with the requirements or recommendation of the competent        authorities of the        country of the vessel's registry and of ports of shipment and discharge and of any intermediate countries        of ports through        whose waters the vessel must pass. Without prejudice to the generality of the foregoing, in addition the        following are        specifically excluded:        Livestock  of  any  description,  arms,  ammunition,  explosives,  nuclear  and  radioactive  materials,  acids,        asbestos, asphalt in         bulk or  teaking drums, bones, borax  in bulk,  calcium  carbide,  calcium hypochloride,  cargoes requiring        more ventilation than        the  vessel  can provide,  caustic  soda,  charcoal,  Chilean nitrates,  clay  in bulk,  copra,  cotton,  creosoted        goods, direct reduced        iron and its products, explosives, ferro silicon, fire briquettes, fishmeal, granite blocks, heavy logs, hides,        HBI, milled rice in        bulk,  motor  blocks,  motor  spirits,  naphtha,  petroleum  and  its  products  except  for  petcoke  which  is        allowed, pitch in bulk,        saltcake,  sodium  sulphate  in bulk,  sunflower  seed expellers and other expellers,  tar and  its products,        turnings and shavings,        tarpentine, war material. Concentrates, if carried, to be in full conformity with and to be loaded/carried in        accordance with IMO       regulations/recommendations and  local authorities and  certificate of  water  contents  to be  within  safety       margin for water        transport.        Salt  and  sulphur  may  be  loaded  under  the  Charter  Party.  The  crew  to  perform  limewashing/removal        against US$ 400 per        hold  for  lime washing and US$ 400 per hold  for  lime removal  in addition  to  the regular hold  cleaning.        Charterers to supply        lime and lime removal.        Charterers option to use other related and approved protective products, such as hold block and clause to        be logically        amended  accordingly.  It  is  understood  that  Chilean  rock  salt  is  not  considered  a  dirty  cargo  and  no        limewash is required for        this cargo with destination USA/Canada.    For concentrates : upon charterers request, owners will seek advise from their p+i club and flagstate as to        vessels suitabillity        to  carry  metal  sulphide  concentrates  ( or  similar) group a&b, un 3077 on  case by  case basis.  (  see        attached list for which a        fixed gas fire­extinguishing system may be exempted. Metal sulphide concentrates may be carried when        they do not exhibit        any  self­heating,  flammability, or water­reactive  flammability hazards  in accordance  with  the  mhb  tests        and classification        criteria contained in the code.)        In case containers are loaded:        A) Vessel/Owners not to be responsible for containers and/or damage due to improper stuffing (including        loss of or damage        to the Vessel)        B) All containers to be sealed before loaded on board the vessel, failing which the Owners/vessel not to        be responsible for        contents of containers. Owners not to be responsible for pilferage from containers. At each discharge port        the Charterers        shall, in their time and at their risk and expense, endeavour to remove from the vessel lashing, securing        and other materials        supplied by  the  Charterers and no  longer  required  for  cargo operations. Lashing,  securing and other        materials kept on board        the  vessel by  the  Charterers  for  further use  in  cargo operations during  the period  that  the  vessel  is        employed under this        charter and any materials no longer required for  cargo operations and not removed at each discharge        port shall be properly        stored in an area as agreed with the Master and to the Master’s satisfaction. This work will be performed        by labour employed        by the Charterers in their time and at their risk and expense. These provisions shall not apply to materials        which belong to the        Vessel  or  are  provided  by  the  Owners.  Prior  to  redelivery,  all  lashing,  securing  and  other  materials        supplied by the Charterers        shall be removed from the vessel by the Charterers in their time and at their risk and expense.        Owners not  to be responsible  for any  contamination and/or damage  to  cargo  which  may arise due  to        mixed cargo loaded.        Mineral sands including silica sand allowed, but Charterers to be responsible for cleanliness of vessel's        holds.        It  is  understood  Charterers  can  carry  cement/clinker/petcoke/sulphur/salt.  Charterers  are  permitted  to        carry 2 consecutive        dirties at any time under the currency of this Charter Party. Should any of these be the last cargo, then        Charterers to pay US$        5,000  in  lieu  of  hold  cleaning  payment  after  aforementioned  cargoes.  Lime  for  salt  and  sulphur  and        removal of same for        Charterers'  account  further  Charterers  will  remain  ultimate  responsible  for  vessels  intermediate  hold        cleanliness/presentation        of clean hold during this Charter Party as per Clause 36. Charterers are allowed to carry 2 times every        solar year shredded        scrap of HMS grades 1+2. Charterers to pay US$ 10,000 lumpsum for such cargo (scrap metal clause to        apply ­ see Clause        49).        Charterers allowed to carry max 15,000 metric tons of bonus grade which always to be loaded on top of        HMS 1+2 and        always stowed to the Master satisfaction” ",
                </Table_item>
            </Grid >
            <Grid  item xs={4}>
                <Table_item>Source</Table_item>
            </Grid>
            <Grid item xs={4}>
                <Table_item>Format</Table_item>
            </Grid>
        </Grid>
      </Grid>
      </Box>
    </div>
  )
}

export default Charter_Party
