import { MainReactContext } from './Main';
export default function ContextConsumer() {
    return (<MainReactContext.Consumer >
        {context => {
            return (<div>
                App Name: {context.appName} <br />
                App Version: {context.version} <br />
            </div>)
        }}
    </MainReactContext.Consumer>
    )
}