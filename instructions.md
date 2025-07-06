<project>
  <name>D&D 5e Character Creation and Management App</name>
  <description>
    An online application that allows players to create, manage, and share their Dungeons & Dragons 5e characters. It fetches reference data from the official D&D 5e API.
  </description>

  <role>
    You are an experienced full-stack developer working with Angular, .NET, TypeScript, and MSQL to build this app.
  </role>

  <features>
    <feature>
      <title>Create a Character</title>
      <details>
        <item>Input name, race, class, background</item>
        <item>Set ability scores (STR, DEX, CON, INT, WIS, CHA)</item>
        <item>Configure HP, level, AC, skills, equipment, spells</item>
        <item>Fetch options dynamically from https://www.dnd5eapi.co/</item>
        <item>Validate and save to MSQL database</item>
      </details>
    </feature>
    <feature>
      <title>Edit a Character</title>
      <details>
        <item>Load character into editable form</item>
        <item>Support updates for stats, features, and leveling up</item>
        <item>Validate and persist changes</item>
      </details>
    </feature>
    <feature>
      <title>Delete a Character</title>
      <details>
        <item>Prompt confirmation</item>
        <item>Remove character from database</item>
        <item>Update UI accordingly</item>
      </details>
    </feature>
  </features>

  <techstack>
    <frontend>
      <framework>Angular</framework>
      <language>TypeScript</language>
      <styling>TailwindCSS or Chakra UI</styling>
      <routing>Angular Router</routing>
      <forms>Reactive Forms</forms>
      <dataFetching>HTTPClientModule</dataFetching>
      <externalAPI>https://www.dnd5eapi.co/</externalAPI>
    </frontend>

    <backend>
      <framework>ASP.NET Core Web API</framework>
      <language>C#</language>
      <scripting>Optional TypeScript (NodeJS) utilities</scripting>
      <apiStyle>RESTful (JSON)</apiStyle>
      <dataLayer>Entity Framework Core</dataLayer>
      <externalIntegration>Fetch and cache data from 5e API</externalIntegration>
    </backend>

    <database>
      <engine>Microsoft SQL Server (MSQL)</engine>
      <entities>
        <entity>Characters</entity>
        <entity>Users (optional)</entity>
        <entity>DND Cache Tables (optional)</entity>
      </entities>
    </database>

    <authentication>
      <type>Optional (MVP)</type>
      <methods>ASP.NET Identity or Auth0</methods>
      <authStyle>JWT-based</authStyle>
    </authentication>

    <deployment>
      <frontend>Azure Static Web Apps or Vercel</frontend>
      <backend>Azure App Service or Railway</backend>
      <database>Azure SQL or Local SQL Server</database>
    </deployment>
  </techstack>

  <structure>
    <directory>/client - Angular frontend</directory>
    <directory>/server - ASP.NET Core API backend</directory>
    <directory>/Models - C# domain models</directory>
    <directory>/Controllers - API logic</directory>
    <directory>/Services - D&D API integration</directory>
    <directory>/Scripts - Optional NodeJS/TypeScript sync tools</directory>
  </structure>

  <copilotNotes>
    <note>Use typed interfaces in both Angular and C#</note>
    <note>Follow Angular service and component best practices</note>
    <note>Design RESTful APIs in .NET with clear separation of concerns</note>
    <note>Comment areas for future expansion: multiclassing, feats, PDF export</note>
    <note>Cache static D&D 5e API data if needed for performance</note>
  </copilotNotes>
</project>
ng new client --routing --style=css
cd client