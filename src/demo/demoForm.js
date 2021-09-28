import Button from "../cpn/Button"
import TextInput from "../cpn/TextInput"
const Demo = () => {
    return (
        <div>
            <TextInput type="file" />
            <TextInput type="text" placeholder="ทดสอบ" title="ทดสอบ"/>
            <TextInput type="submit" value="Primary" backgroundColor="primary" />
            <TextInput type="submit" value="Success" backgroundColor="success" />
            <TextInput type="submit" value="Danger" backgroundColor="danger" />
            <TextInput type="submit" value="Warning" backgroundColor="warning" />
            <TextInput type="submit" value="Danger" backgroundColor="info" />
        </div>
    )
}

export default Demo

//placeholder////