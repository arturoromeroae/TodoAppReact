import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AlarmOnRoundedIcon from '@mui/icons-material/AlarmOnRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import AlarmOffRoundedIcon from '@mui/icons-material/AlarmOffRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import ContentPasteOffRoundedIcon from '@mui/icons-material/ContentPasteOffRounded';
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import './ConfigTodo.css'

const ConfigTodo = () => {
    const [newIcon, setNewIcon] = useState(AlarmOnRoundedIcon);

    const {
        addTodo,
        setOpenModalConfig,
    } = useContext(TodoContext);

    const onChange = (e) => {
        setNewIcon(e.target.value);
    }

    const onCancel = () => {
        setOpenModalConfig(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo("", newIcon);
        setOpenModalConfig(false);
    };
    
    return (
        <>
            <form onSubmit={onSubmit} className="config-form">
                <div>
                    <span 
                        className='CloseModal'
                        onClick={onCancel}
                    >
                        x
                    </span>
                    <h1 className='TitleForm'>Configurar Mi Todo</h1>
                    <FormControl className='form-icons'>
                        <FormLabel id="demo-row-radio-buttons-group-label">Seleccione el icono para completar la tarea</FormLabel>
                        <RadioGroup
                            className='radio'
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={onChange}
                        >
                            <FormControlLabel value="done" control={<Radio />} label={<i className='material-icons'>done</i>} />
                            <FormControlLabel value="CheckCircleRoundedIcon" control={<Radio />} label={<CheckCircleRoundedIcon />} />
                            <FormControlLabel value="AssignmentTurnedInRoundedIcon" control={<Radio />} label={<AssignmentTurnedInRoundedIcon />} />
                            <FormControlLabel value="BeenhereRoundedIcon" control={<Radio />} label={<BeenhereRoundedIcon />} />
                            <FormControlLabel value="CelebrationRoundedIcon" control={<Radio />} label={<CelebrationRoundedIcon />} />
                            <FormControlLabel value="MoodRoundedIcon" control={<Radio />} label={<MoodRoundedIcon />} />
                        </RadioGroup>
                        <FormLabel id="demo-row-radio-buttons-group-label">Color</FormLabel>
                        <div>
                            <input type="color" id="favcolor" name="favcolor" />
                        </div>
                        <br />
                        <FormLabel id="demo-row-radio-buttons-group-label">Seleccione el icono para la tarea que aun no se completa</FormLabel>
                        <RadioGroup
                            className='radio'
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="AccessAlarmsRoundedIcon" control={<Radio />} label={<AccessAlarmsRoundedIcon />} />
                            <FormControlLabel value="CancelRoundedIcon" control={<Radio />} label={<CancelRoundedIcon />} />
                            <FormControlLabel value="AssignmentLateRoundedIcon" control={<Radio />} label={<AssignmentLateRoundedIcon />} />
                            <FormControlLabel value="BookmarkRoundedIcon" control={<Radio />} label={<BookmarkRoundedIcon />} />
                            <FormControlLabel value="CampaignRoundedIcon" control={<Radio />} label={<CampaignRoundedIcon />} />
                            <FormControlLabel value="SentimentDissatisfiedRoundedIcon" control={<Radio />} label={<SentimentDissatisfiedRoundedIcon />} />
                        </RadioGroup>
                        <FormLabel id="demo-row-radio-buttons-group-label">Color</FormLabel>
                        <div>
                            <input type="color" id="favcolor" name="favcolor" />
                        </div>
                        <br />
                        <FormLabel id="demo-row-radio-buttons-group-label">Seleccione el icono para eliminar Todo´s</FormLabel>
                        <RadioGroup
                            className='radio'
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="AlarmOffRoundedIcon" control={<Radio />} label={<AlarmOffRoundedIcon />} />
                            <FormControlLabel value="BlockRoundedIcon" control={<Radio />} label={<BlockRoundedIcon />} />
                            <FormControlLabel value="ContentPasteOffRoundedIcon" control={<Radio />} label={<ContentPasteOffRoundedIcon />} />
                            <FormControlLabel value="BackspaceRoundedIcon" control={<Radio />} label={<BackspaceRoundedIcon />} />
                            <FormControlLabel value="DeleteForeverRoundedIcon" control={<Radio />} label={<DeleteForeverRoundedIcon />} />
                            <FormControlLabel value="SentimentVeryDissatisfiedRoundedIcon" control={<Radio />} label={<SentimentVeryDissatisfiedRoundedIcon />} />
                        </RadioGroup>
                        <FormLabel id="demo-row-radio-buttons-group-label">Color</FormLabel>
                        <div>
                            <input type="color" id="favcolor" name="favcolor" />
                        </div>
                    </FormControl>
                    <div className='group-button'>
                        <button
                            className='cancelTodo'
                            type='button'
                            onClick={onCancel}
                        >
                            <i className="material-icons cancel">not_interested</i>
                            Cancelar
                        </button>
                        <button
                            className='addTodo'
                            type='submit'
                        >
                            <i className="material-icons add">done</i>
                            Aceptar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export { ConfigTodo };