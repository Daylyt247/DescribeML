"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetDescriptorValidator = exports.DatasetDescriptorValidationRegistry = void 0;
const langium_1 = require("langium");
/**
 * Registry for validation checks.
 */
class DatasetDescriptorValidationRegistry extends langium_1.ValidationRegistry {
    constructor(services) {
        super(services);
        const validator = services.validation.DatasetDescriptorValidator;
        const checks = {
            GeneralInfo: validator.hintsOfDescription,
            Authoring: validator.hintsOfAuthoring,
            Author: validator.authorValidator,
            Founder: validator.hintsOfFounder,
            Maintenance: validator.hintsOfMaintainer,
            DatasetDefinition: validator.hintOfDatasetDefinition
        };
        this.register(checks, validator);
    }
}
exports.DatasetDescriptorValidationRegistry = DatasetDescriptorValidationRegistry;
/**
 * Implementation of custom validations.
 */
class DatasetDescriptorValidator {
    hintsOfDescription(type, accept) {
        //  accept('warning', 'Version should have the following form: V000', { node: type, property: 'version' });
        accept('hint', '1 - For what propose was the dataser created? \n2 - Was there a specific task in mind?\n3 - Was there specific gap that needed to be filled?\nPlease provide a description', { node: type, property: 'description' });
    }
    hintsOfAuthoring(type, accept) {
        accept('hint', '1 - Who created the dataset for example, which team or research group?', { node: type, property: 'authors' });
        accept('hint', '1 - Who founded the creation of the dataset?\n2 - If is there any associated grant, please provide the number and the name of the grantor and the gran name and number', { node: type, property: 'founders' });
    }
    hintsOfFounder(type, accept) {
    }
    hintsOfMaintainer(type, accept) {
        accept('hint', 'Who maintan the dataset? How can be contacted?', { node: type, property: 'maintainers' });
        accept('hint', 'Is there an erratum? If so, please provide a link or other access point?', { node: type, property: 'erratum' });
        accept('hint', 'If the dataset belongs to people, are there applicable limits on the retention of the data associated with them? If so, please describre how. If not, please describre how its obsolescence will be communicated to the dataset', { node: type, property: 'dataRetention' });
        accept('hint', '1 - Will the dataset by updated (p.e: to correct labels, add or delete new instances)? If so, please describre how \n2 - Will older version of the dataset continue to be supported/hosted/maintained?', { node: type, property: 'support' });
        accept('hint', 'Please describre the mechanism for contribution here', { node: type, property: 'contribGuides' });
    }
    hintOfDatasetDefinition(type, accept) {
        accept('hint', 'What do the isntances that comprise the dataset represent(for example, documents, photos, people, countries)', { node: type, property: 'description' });
        accept('hint', 'How many instances are there in total?', { node: type, property: 'numberInst' });
    }
    authorValidator(type, accept) {
        if (type.name) {
            const firstChar = type.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Type name should start with a capital.', { node: type, property: 'name' });
            }
        }
    }
}
exports.DatasetDescriptorValidator = DatasetDescriptorValidator;
//# sourceMappingURL=dataset-descriptor-validator.js.map