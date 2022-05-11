/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, isAstNode } from 'langium';

export interface Applications extends AstNode {
    readonly $container: Metadata;
    future: Array<string>
    name: 'Applications:'
    past: Array<string>
    recommend: Array<string>
    repo: string
}

export const Applications = 'Applications';

export function isApplications(item: unknown): item is Applications {
    return reflection.isInstance(item, Applications);
}

export interface Area extends AstNode {
    readonly $container: Metadata;
    area: Array<string>
    name: 'Area:'
}

export const Area = 'Area';

export function isArea(item: unknown): item is Area {
    return reflection.isInstance(item, Area);
}

export interface Attribute extends AstNode {
    readonly $container: DataInstance;
    attdesc: string
    attType: Categor | Numeri
    count: number
    labelProces?: Reference<LabelingProcess>
    name: string
    unique: number
}

export const Attribute = 'Attribute';

export function isAttribute(item: unknown): item is Attribute {
    return reflection.isInstance(item, Attribute);
}

export interface Author extends AstNode {
    readonly $container: Authors;
    email: string
    name: string
}

export const Author = 'Author';

export function isAuthor(item: unknown): item is Author {
    return reflection.isInstance(item, Author);
}

export interface Authoring extends AstNode {
    readonly $container: Metadata;
    authors: Array<Authors>
    contribGuides: string
    dataRetention: string
    erratum: string
    founding: Array<Founders>
    maintainers: Array<Maintainer>
    name: 'Authoring:'
    support: string
}

export const Authoring = 'Authoring';

export function isAuthoring(item: unknown): item is Authoring {
    return reflection.isInstance(item, Authoring);
}

export interface Authors extends AstNode {
    readonly $container: Authoring;
    authors: Array<Author>
    name: 'Authors:'
}

export const Authors = 'Authors';

export function isAuthors(item: unknown): item is Authors {
    return reflection.isInstance(item, Authors);
}

export interface Binary extends AstNode {
    readonly $container: Categor;
    attspar: number
    sym: AttributeSymmetry
}

export const Binary = 'Binary';

export function isBinary(item: unknown): item is Binary {
    return reflection.isInstance(item, Binary);
}

export interface Categor extends AstNode {
    readonly $container: Attribute;
    binary: Binary
    catdist: string
    metrics: Array<QualityMetric>
    mode: string
    name: 'Categorical'
}

export const Categor = 'Categor';

export function isCategor(item: unknown): item is Categor {
    return reflection.isInstance(item, Categor);
}

export interface Composition extends AstNode {
    readonly $container: Declaration;
    compodesc: Array<string>
    dependencies: Dependencies
    instances: Array<DataInstances>
    name: 'Composition:'
    numberInst: number
    relation: RelationInstances
    sample: string
    splits: string
}

export const Composition = 'Composition';

export function isComposition(item: unknown): item is Composition {
    return reflection.isInstance(item, Composition);
}

export interface ConsistencyRules extends AstNode {
    readonly $container: DataInstance;
    attrule1: Reference<Attribute>
    attrule2?: Reference<Attribute>
    comparator: number
}

export const ConsistencyRules = 'ConsistencyRules';

export function isConsistencyRules(item: unknown): item is ConsistencyRules {
    return reflection.isInstance(item, ConsistencyRules);
}

export interface DataInstance extends AstNode {
    readonly $container: DataInstances;
    attributes: Array<Attribute>
    attrnum: number
    descript: string
    name: string
    numIns: number
    rules: Array<ConsistencyRules>
    statistics: Array<Statistics>
    type: InstanceType
}

export const DataInstance = 'DataInstance';

export function isDataInstance(item: unknown): item is DataInstance {
    return reflection.isInstance(item, DataInstance);
}

export interface DataInstances extends AstNode {
    readonly $container: Composition;
    instances: Array<DataInstance>
    name: 'Data Instances:'
}

export const DataInstances = 'DataInstances';

export function isDataInstances(item: unknown): item is DataInstances {
    return reflection.isInstance(item, DataInstances);
}

export interface Declaration extends AstNode {
    readonly $container: DescriptionDataset;
    composition: Composition
    generalinfo: Metadata
    name: string
    provenance: Provenance
    socialConcerns: SocialConcerns
}

export const Declaration = 'Declaration';

export function isDeclaration(item: unknown): item is Declaration {
    return reflection.isInstance(item, Declaration);
}

export interface Demographics extends AstNode {
    readonly $container: GatheringProcess | Team;
    age: string
    country: string
    disordered: string
    gender: string
    native: string
    number: string
    race: string
    status: string
    training: string
}

export const Demographics = 'Demographics';

export function isDemographics(item: unknown): item is Demographics {
    return reflection.isInstance(item, Demographics);
}

export interface Dependencies extends AstNode {
    readonly $container: Composition;
    archival: string
    desc: string
    limit: string
    restriction: string
}

export const Dependencies = 'Dependencies';

export function isDependencies(item: unknown): item is Dependencies {
    return reflection.isInstance(item, Dependencies);
}

export interface DescriptionDataset extends AstNode {
    elements: Array<Declaration>
}

export const DescriptionDataset = 'DescriptionDataset';

export function isDescriptionDataset(item: unknown): item is DescriptionDataset {
    return reflection.isInstance(item, DescriptionDataset);
}

export interface Distribution extends AstNode {
    readonly $container: Metadata;
    lic: string
    name: 'Distribution:'
    past: string
    public: string
}

export const Distribution = 'Distribution';

export function isDistribution(item: unknown): item is Distribution {
    return reflection.isInstance(item, Distribution);
}

export interface Founders extends AstNode {
    readonly $container: Authoring;
    funders: Array<Funder>
    name: 'Funders:'
}

export const Founders = 'Founders';

export function isFounders(item: unknown): item is Founders {
    return reflection.isInstance(item, Founders);
}

export interface Funder extends AstNode {
    readonly $container: Founders;
    grantor: string
    name: string
    type: FundersType
}

export const Funder = 'Funder';

export function isFunder(item: unknown): item is Funder {
    return reflection.isInstance(item, Funder);
}

export interface GatheringProcess extends AstNode {
    readonly $container: GatheringProcesses;
    desc: string
    gatherDates: string
    gatheringTeam: Team
    how: GatherType
    labelSocialIssues?: Reference<SocialIssue>
    mapInstance?: Reference<DataInstance>
    name: string
    processDemo: Demographics
    requeriments: Array<Requeriments>
    source: Source
    when: string
}

export const GatheringProcess = 'GatheringProcess';

export function isGatheringProcess(item: unknown): item is GatheringProcess {
    return reflection.isInstance(item, GatheringProcess);
}

export interface GatheringProcesses extends AstNode {
    readonly $container: Provenance;
    name: 'Gathering Processes:'
    processes: Array<GatheringProcess>
}

export const GatheringProcesses = 'GatheringProcesses';

export function isGatheringProcesses(item: unknown): item is GatheringProcesses {
    return reflection.isInstance(item, GatheringProcesses);
}

export interface LabelingProcess extends AstNode {
    readonly $container: LabelingProcesses;
    desc: string
    labelingTeam: Team
    labelSocialIssues?: Reference<SocialIssue>
    name: string
    requeriments: Array<Requeriments>
    type: AnnotationType
}

export const LabelingProcess = 'LabelingProcess';

export function isLabelingProcess(item: unknown): item is LabelingProcess {
    return reflection.isInstance(item, LabelingProcess);
}

export interface LabelingProcesses extends AstNode {
    readonly $container: Provenance;
    labprocesses: Array<LabelingProcess>
    name: 'LabelingProcesses:'
}

export const LabelingProcesses = 'LabelingProcesses';

export function isLabelingProcesses(item: unknown): item is LabelingProcesses {
    return reflection.isInstance(item, LabelingProcesses);
}

export interface Labels extends AstNode {
    desc: string
    map?: Reference<Attribute>
    name: string
}

export const Labels = 'Labels';

export function isLabels(item: unknown): item is Labels {
    return reflection.isInstance(item, Labels);
}

export interface Maintainer extends AstNode {
    readonly $container: Authoring;
    email: string
    name: string
}

export const Maintainer = 'Maintainer';

export function isMaintainer(item: unknown): item is Maintainer {
    return reflection.isInstance(item, Maintainer);
}

export interface Metadata extends AstNode {
    readonly $container: Declaration;
    area: Area
    authoring: Authoring
    citation: string
    dates: string
    description: string
    descriptionGaps: string
    descriptionpurpose: string
    descriptionTasks: string
    distribution: Distribution
    ident: string
    licence: CommonLicences
    name: 'Metadata:'
    tags: Tags
    title: string
    uses: Applications
    version: string
}

export const Metadata = 'Metadata';

export function isMetadata(item: unknown): item is Metadata {
    return reflection.isInstance(item, Metadata);
}

export interface Numeri extends AstNode {
    readonly $container: Attribute;
    iqr: number
    max: number
    mean: number
    median: number
    metrics: Array<QualityMetric>
    min: number
    name: 'Numerical'
    quartiles: string
    std: number
}

export const Numeri = 'Numeri';

export function isNumeri(item: unknown): item is Numeri {
    return reflection.isInstance(item, Numeri);
}

export interface PairCorrelation extends AstNode {
    readonly $container: Statistics;
    attr1?: Reference<Attribute>
    attr2?: Reference<Attribute>
    from: string
    rationale: string
}

export const PairCorrelation = 'PairCorrelation';

export function isPairCorrelation(item: unknown): item is PairCorrelation {
    return reflection.isInstance(item, PairCorrelation);
}

export interface PreProcess extends AstNode {
    readonly $container: PreProcesses;
    desc: string
    name: string
}

export const PreProcess = 'PreProcess';

export function isPreProcess(item: unknown): item is PreProcess {
    return reflection.isInstance(item, PreProcess);
}

export interface PreProcesses extends AstNode {
    readonly $container: Provenance;
    name: 'Preprocesses:'
    preprocesses: Array<PreProcess>
}

export const PreProcesses = 'PreProcesses';

export function isPreProcesses(item: unknown): item is PreProcesses {
    return reflection.isInstance(item, PreProcesses);
}

export interface Provenance extends AstNode {
    readonly $container: Declaration;
    curation: string
    gathering: Array<GatheringProcesses>
    labeling: Array<LabelingProcesses>
    name: 'Data Provenance:'
    other: Array<PreProcesses>
}

export const Provenance = 'Provenance';

export function isProvenance(item: unknown): item is Provenance {
    return reflection.isInstance(item, Provenance);
}

export interface QualityMetric extends AstNode {
    readonly $container: Statistics | Categor | Numeri;
    balance: string
    complet: number
    noisy: string
    sparsity: number
}

export const QualityMetric = 'QualityMetric';

export function isQualityMetric(item: unknown): item is QualityMetric {
    return reflection.isInstance(item, QualityMetric);
}

export interface Relation extends AstNode {
    readonly $container: RelationInstances;
    attRel?: Reference<Attribute>
    attRelTarget?: Reference<Attribute>
    insRel?: Reference<DataInstance>
    name: string
}

export const Relation = 'Relation';

export function isRelation(item: unknown): item is Relation {
    return reflection.isInstance(item, Relation);
}

export interface RelationInstances extends AstNode {
    readonly $container: Composition;
    relation: Array<Relation>
}

export const RelationInstances = 'RelationInstances';

export function isRelationInstances(item: unknown): item is RelationInstances {
    return reflection.isInstance(item, RelationInstances);
}

export interface Requeriments extends AstNode {
    readonly $container: GatheringProcess | LabelingProcess;
    req: string
}

export const Requeriments = 'Requeriments';

export function isRequeriments(item: unknown): item is Requeriments {
    return reflection.isInstance(item, Requeriments);
}

export interface SocialConcerns extends AstNode {
    readonly $container: Declaration;
    desc: string
    name: 'Social Concerns:'
    socialIssues: Array<SocialIssue>
}

export const SocialConcerns = 'SocialConcerns';

export function isSocialConcerns(item: unknown): item is SocialConcerns {
    return reflection.isInstance(item, SocialConcerns);
}

export interface SocialIssue extends AstNode {
    readonly $container: SocialConcerns;
    desc: string
    IssueType: SocialIssueType
    name: string
    offDiscussion: string
    procGroups: string
    senseAtt?: Reference<Attribute>
}

export const SocialIssue = 'SocialIssue';

export function isSocialIssue(item: unknown): item is SocialIssue {
    return reflection.isInstance(item, SocialIssue);
}

export interface Source extends AstNode {
    readonly $container: GatheringProcess;
    name: string
    noise: Array<string>
    sourcedesc: string
}

export const Source = 'Source';

export function isSource(item: unknown): item is Source {
    return reflection.isInstance(item, Source);
}

export interface SpeechSitatuion extends AstNode {
    name: string | SpeechModality | SpeechType | SpeechSyncrony
}

export const SpeechSitatuion = 'SpeechSitatuion';

export function isSpeechSitatuion(item: unknown): item is SpeechSitatuion {
    return reflection.isInstance(item, SpeechSitatuion);
}

export interface Statistics extends AstNode {
    readonly $container: DataInstance;
    metric: Array<QualityMetric>
    pair: Array<PairCorrelation>
}

export const Statistics = 'Statistics';

export function isStatistics(item: unknown): item is Statistics {
    return reflection.isInstance(item, Statistics);
}

export interface Tags extends AstNode {
    readonly $container: Metadata;
    name: 'Tags:'
    tags: Array<string>
}

export const Tags = 'Tags';

export function isTags(item: unknown): item is Tags {
    return reflection.isInstance(item, Tags);
}

export interface Team extends AstNode {
    readonly $container: GatheringProcess | LabelingProcess;
    gatherType: TeamType
    teamDemographics: Demographics
    who: string
}

export const Team = 'Team';

export function isTeam(item: unknown): item is Team {
    return reflection.isInstance(item, Team);
}

export type CommonLicences = 'Creative Commons' | 'CC0: Public Domain' | 'CC BY-NC-SA 4.0' | 'CC BY-SA 4.0' | 'CC BY-SA 3.0' | 'CC BY 4.0 (Attribution 4.0 International)' | 'CC BY-NC 4.0 (Attribution-NonCommercial 4.0 International)' | 'CC BY 3.0 (Attribution 3.0 Unported)' | 'CC BY 3.0 IGO (Attribution 3.0 IGO)' | 'CC BY-NC-SA 3.0 IGO (Attribution-NonCommercial-ShareAlike 3.0 IGO)' | 'CC BY-ND 4.0 (Attribution-NoDerivatives 4.0 International)' | 'CC BY-NC-ND 4.0 (Attribution-NonCommercial-NoDerivatives 4.0 International)' | 'GPL' | 'GPL 2' | 'LGPL 3.0 (GNU Lesser General Public License 3.0)' | 'AGPL 3.0 (GNU Affero General Public License 3.0)' | 'FDL 1.3 (GNU Free Documentation License 1.3)' | 'Open Data Commons' | 'Database: Open Database, Contents: Database Contents' | 'Database: Open Database, Contents: © Original Authors' | 'PDDL (ODC Public Domain Dedication and Licence)' | 'ODC-BY 1.0 (ODC Attribution License)' | 'Community Data License' | 'Community Data License Agreement - Permissive - Version 1.0' | 'Community Data License Agreement - Sharing - Version 1.0' | 'Special' | 'World Bank Dataset Terms of Use' | 'Reddit API Terms' | 'U.S. Government Works' | 'EU ODP Legal Notice'

export type InstanceType = 'Record-Data' | 'Time-Series' | 'Ordered' | 'Graph' | 'Other'

export type FundersType = 'private' | 'public' | 'mixed'

export type AttributeSymmetry = 'Symmetric' | 'Asymmetric'

export type AnnotationType = 'Bounding boxes' | 'Lines and splines' | 'Semantinc Segmentation' | '3D cuboids' | 'Polygonal segmentation' | 'Landmark and key-point' | 'Image and video annotations' | 'Entity annotation' | 'Content and text categorization'

export type SocialIssueType = 'Privacy' | 'Bias' | 'Sensitive Data' | 'Social Impact'

export type GatherType = 'API' | 'Sensors' | 'Manual Human Curator' | 'Software' | 'Others'

export type TeamType = 'Internal' | 'External' | 'Contractors' | 'Crowdsourcing'

export type SpeechModality = 'spoken/signed' | 'written'

export type SpeechType = 'Scripted/edited' | 'spontaneous'

export type SpeechSyncrony = 'synchronous interaction' | 'asynchronous intercation'

export type DataTypes = 'String' | 'Integer' | 'Boolean' | 'Other'

export type QualifiedName = string

export type Operators = '<' | '>' | '=' | '!=' | '+' | '-'

export type datasetDescriptorAstType = 'Applications' | 'Area' | 'Attribute' | 'Author' | 'Authoring' | 'Authors' | 'Binary' | 'Categor' | 'Composition' | 'ConsistencyRules' | 'DataInstance' | 'DataInstances' | 'Declaration' | 'Demographics' | 'Dependencies' | 'DescriptionDataset' | 'Distribution' | 'Founders' | 'Funder' | 'GatheringProcess' | 'GatheringProcesses' | 'LabelingProcess' | 'LabelingProcesses' | 'Labels' | 'Maintainer' | 'Metadata' | 'Numeri' | 'PairCorrelation' | 'PreProcess' | 'PreProcesses' | 'Provenance' | 'QualityMetric' | 'Relation' | 'RelationInstances' | 'Requeriments' | 'SocialConcerns' | 'SocialIssue' | 'Source' | 'SpeechSitatuion' | 'Statistics' | 'Tags' | 'Team';

export type datasetDescriptorAstReference = 'Attribute:labelProces' | 'ConsistencyRules:attrule1' | 'ConsistencyRules:attrule2' | 'GatheringProcess:labelSocialIssues' | 'GatheringProcess:mapInstance' | 'LabelingProcess:labelSocialIssues' | 'Labels:map' | 'PairCorrelation:attr1' | 'PairCorrelation:attr2' | 'Relation:attRel' | 'Relation:attRelTarget' | 'Relation:insRel' | 'SocialIssue:senseAtt';

export class datasetDescriptorAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['Applications', 'Area', 'Attribute', 'Author', 'Authoring', 'Authors', 'Binary', 'Categor', 'Composition', 'ConsistencyRules', 'DataInstance', 'DataInstances', 'Declaration', 'Demographics', 'Dependencies', 'DescriptionDataset', 'Distribution', 'Founders', 'Funder', 'GatheringProcess', 'GatheringProcesses', 'LabelingProcess', 'LabelingProcesses', 'Labels', 'Maintainer', 'Metadata', 'Numeri', 'PairCorrelation', 'PreProcess', 'PreProcesses', 'Provenance', 'QualityMetric', 'Relation', 'RelationInstances', 'Requeriments', 'SocialConcerns', 'SocialIssue', 'Source', 'SpeechSitatuion', 'Statistics', 'Tags', 'Team'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            default: {
                return false;
            }
        }
    }

    getReferenceType(referenceId: datasetDescriptorAstReference): string {
        switch (referenceId) {
            case 'Attribute:labelProces': {
                return LabelingProcess;
            }
            case 'ConsistencyRules:attrule1': {
                return Attribute;
            }
            case 'ConsistencyRules:attrule2': {
                return Attribute;
            }
            case 'GatheringProcess:labelSocialIssues': {
                return SocialIssue;
            }
            case 'GatheringProcess:mapInstance': {
                return DataInstance;
            }
            case 'LabelingProcess:labelSocialIssues': {
                return SocialIssue;
            }
            case 'Labels:map': {
                return Attribute;
            }
            case 'PairCorrelation:attr1': {
                return Attribute;
            }
            case 'PairCorrelation:attr2': {
                return Attribute;
            }
            case 'Relation:attRel': {
                return Attribute;
            }
            case 'Relation:attRelTarget': {
                return Attribute;
            }
            case 'Relation:insRel': {
                return DataInstance;
            }
            case 'SocialIssue:senseAtt': {
                return Attribute;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
}

export const reflection = new datasetDescriptorAstReflection();
