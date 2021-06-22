import {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork';


const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;
`;

const Top = styled.div`
    background:${Colors.white};
    border-radius: 10px;

    .bgPhoto{
        background-image: '/public/media/imgs/logo.png';
        background-position: center;
        background-size: cover;
    }

    .bottomTopInfo{
        display: grid;
        grid-template-columns: 12% 1fr;
    }

    .leftImg{
        display: flex;
        align-items: center;
        margin:0 auto;

        img{
            width:35px;
        }
    }

    .rightContent{
        position: relative;

        h1{
            margin-top:15px;
            font-size: ${fontSize[16]};
            font-weight: bold;
        }

        p{
            color:${Colors.lightgrayOriginal};
            margin-top:20px;
        }

        .settingsIcon{
            cursor: pointer;
            width:20px;
            position: absolute;
            right:0;
            margin:5px 5px 0 0;
        }
    }

`;

const Middle = styled.div`
    margin-top: 20px;
    display: flex;
    column-gap: 10px;
    background:${Colors.lightgrayOriginal};
    padding:20px;

`;

const Box = styled.div`
    width:310px;
    border:1px solid purple;
    background:${Colors.white};

    .imgInBoxes{
        width:30px;
    }

`;
interface props{
    type: string;
}

export const WorkspacesMain: FC <props> = (props) => {
    return (
        <Wrapper>
            <Top>
                <div className="bgPhoto">
                    asd
                </div>
                <div className="bottomTopInfo">
                    <div className="leftImg">
                        <img src="./media/icons/entities.png" alt="Right icon img"/>
                    </div>
                    <div className="rightContent">
                        <img src="./media/icons/settingsIcon.png" className="settingsIcon" alt="Settings Icon"/>
                        <h1>Supplier Contract</h1>
                        <p>Workspace puprose workspace puprose workspace puprose workspace puprose workspace puprose workspace puprose workspace puprose</p>
                    </div>
                </div>
            </Top>
            <Middle>
                {/* <p>Start working on corporate matters</p> */}
                <Box>
                    <img className="imgInBoxes" src="./media/icons/entities.png" alt="Entities icon"/>
                    <h1>Explore your entities</h1>
                    <p>Take a few minutes to look at the most important elements and specifcities of your entities.</p>
                </Box>
                <Box>
                    <img className="imgInBoxes" src="./media/imgs/structure.png" alt="Entities icon"/>
                    <h1>Structure the ownership</h1>
                    <p>Get a clear view of the owership by looking at the relations.</p>
                </Box>
                <Box>
                    <img className="imgInBoxes" src="./media/imgs/calendar.png" alt="Entities icon"/>
                    <h1>Define the calendar</h1>
                    <p>Prepare future events by creating detailer plans around the life.</p>
                </Box>
            </Middle>

        </Wrapper>
    );
};