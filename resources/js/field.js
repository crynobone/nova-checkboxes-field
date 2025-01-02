import IndexField from "./components/IndexField";
import DetailField from "./components/DetailField";
import FormField from "./components/FormField";

Nova.booting((app) => {
    app.component("index-nova-checkboxes-field", IndexField);
    app.component("detail-nova-checkboxes-field", DetailField);
    app.component("form-nova-checkboxes-field", FormField);
});
